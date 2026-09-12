//  自动生效禁用物品列表
const FS = require("node:fs");
const PT = require("node:path");

// 全局配置
const ROOT_PATH = "config/itemprohibiteditems";
const KJS_SCRIPT = "ban.js";
const TIP_TEXT = "此物品无法使用";
const ITEM_FILENAME = "items.json";
const WEAR_FILENAME = "wearables.json";
const S_TIME = Date.now();
const HIDE_JEI = true;

// 统计
let itemCount = 0;
let wearCount = 0;


// 创建目录
if (!FS.existsSync(ROOT_PATH)) FS.mkdirSync(ROOT_PATH, { recursive: true });

// 读取里面的目录名称作为命名空间
const listDirent = FS.readdirSync(ROOT_PATH, { withFileTypes: true });

// 遍历空间
for (let i = 0; i < listDirent.length; i++)
{
    const namespace = listDirent[i];
    if (!namespace.isDirectory()) continue;

    // json 文件路径
    const itemJson = PT.join(ROOT_PATH, namespace.name, ITEM_FILENAME);
    const wearJson = PT.join(ROOT_PATH, namespace.name, WEAR_FILENAME);

    // 配置字符串
    const itemData = JSON.parse(FS.readFileSync(itemJson, "utf-8"));
    const wearData = JSON.parse(FS.readFileSync(wearJson, "utf-8"));

    // 各端脚本存放目录
    const clientPath = PT.join("kubejs", "client_scriPTs", namespace.name);
    const ServerPath = PT.join("kubejs", "server_scriPTs", namespace.name);

    // 变量名称
    const itemVarClient = `${namespace.name}_ban_items_${Date.now()}`;
    const wearVarClient = `${namespace.name}_ban_wearables_${Date.now()}`;
    const itemVarServer = itemVarClient + "_server";
    const wearVarServer = wearVarClient + "_server";

    // 创建目录
    if (!FS.existsSync(clientPath)) FS.mkdirSync(clientPath, { recursive: true });
    if (!FS.existsSync(ServerPath)) FS.mkdirSync(ServerPath, { recursive: true });

    // 打开文件
    const clientID = FS.openSync(PT.join(clientPath, KJS_SCRIPT), "w+");
    const serverID = FS.openSync(PT.join(ServerPath, KJS_SCRIPT), "w+");

    // 写入客户端 item
    FS.writeSync(clientID, `let ${itemVarClient} = [\r\n`, null, "utf-8");
    itemData.forEach(line => FS.writeSync(clientID, `\t"${namespace.name.concat(":", line)}",\r\n`, null, "utf-8"));
    FS.writeSync(clientID, "];\r\n", null, "utf-8");
    // 写入客户端 wear
    FS.writeSync(clientID, `let ${wearVarClient} = [\r\n`, null, "utf-8");
    wearData.forEach(line => FS.writeSync(clientID, `\t"${namespace.name.concat(":", line)}",\r\n`, null, "utf-8"));
    FS.writeSync(clientID, "];\r\n", null, "utf-8");
    // 写入代码
    FS.writeSync(clientID, `ItemEvents.tooltip(event => event.add(${itemVarClient}, Text.red("${TIP_TEXT}")));\r\n`, null, "utf-8");
    FS.writeSync(clientID, `ItemEvents.tooltip(event => event.add(${wearVarClient}, Text.red("${TIP_TEXT}")));\r\n`, null, "utf-8");

    // 写入服务端 item
    FS.writeSync(serverID, `let ${itemVarServer} = [\r\n`, null, "utf-8");
    itemData.forEach(line => FS.writeSync(serverID, `\t"${namespace.name.concat(":", line)}",\r\n`, null, "utf-8"));
    FS.writeSync(serverID, "];\r\n", null, "utf-8");
    // 写入服务端 wear
    FS.writeSync(serverID, `let ${wearVarServer} = [\r\n`, null, "utf-8");
    wearData.forEach(line => FS.writeSync(serverID, `\t"${namespace.name.concat(":", line)}",\r\n`, null, "utf-8"));
    FS.writeSync(serverID, "];\r\n", null, "utf-8");
    // 写入代码
    FS.writeSync(serverID, `ServerEvents.recipes(event => event.remove({ output: ${itemVarServer}}));\r\n`, null, "utf-8");
    FS.writeSync(serverID, `ServerEvents.recipes(event => event.remove({ output: ${wearVarServer}}));\r\n`, null, "utf-8");

    // 隐藏 JEI
    if (HIDE_JEI)
    {
        FS.writeSync(serverID, `ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", ${itemVarServer}));\r\n`, null, "uit-8");
        FS.writeSync(serverID, `ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", ${wearVarServer}));\r\n`, null, "uit-8");
    }

    // 关闭文件
    FS.closeSync(clientID);
    FS.closeSync(serverID);

    // 统计
    itemCount += itemData.length;
    wearCount += wearData.length;

    // 输出
    console.log(`mod => ${namespace.name}, items => ${itemData.length}, wears => ${wearData.length}`);
}

// 耗时
console.log("time ms:", Date.now() - S_TIME, "ms");
console.log("item total:", itemCount);
console.log("wear total:", wearCount);
console.log("total:", itemCount + wearCount);

