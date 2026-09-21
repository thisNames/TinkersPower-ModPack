const FS = require("node:fs");
const PT = require("node:path");

// kjs 服务端脚本路径
const KJS_SER_S = PT.join(process.cwd(), "kubejs/server_scripts");
// 战利品目录名此
const LOOT_NAME = "loot_tables";

// 所有的模组目录
const listModDirent = FS.readdirSync(KJS_SER_S, { withFileTypes: true, encoding: "utf-8" }).filter(i => i.isDirectory());

for (let i = 0; i < listModDirent.length; i++) {
    // 模组目录
    const modDirent = listModDirent[i];
    // 战利品目录
    const lootDir = PT.join(KJS_SER_S, modDirent.name, LOOT_NAME);

    // 目录不存在跳过
    if (!FS.existsSync(lootDir) || !FS.statSync(lootDir).isDirectory()) continue;

    // 获取战利品种类
    const listLootDirent = FS.readdirSync(lootDir, { withFileTypes: true, encoding: "utf-8" }).filter(i => i.isDirectory());

    // 创建目录
    listLootDirent.forEach(loot => createLootFolders(loot));
}


function createLootFolders(lootType) {
    console.log(lootType);
}