const FS = require("node:fs");
const PT = require("node:path");

// kjs 服务端脚本路径
const KJS_SER_S = PT.join(process.cwd(), "kubejs/server_scripts");
// 战利品目录名此
const LOOT_NAME = "loot_tables";
// 是否创建 .keep 文件
const DOT_KEEP = true;
// 创建目录后是否删除 json 文件
const DEL_FOR_JSON = true;

/**
 * 创建战利品目录
 * @param {FS.Dirent} lootDirent 战利品类型
 * @returns {Number} 实际创建了的战利品数量
 */
function createLootFolders(lootDirent) {
    // 统计
    let count = 0;
    // 战利品类别目录
    const lootDir = PT.join(lootDirent.parentPath, lootDirent.name);
    // 战利品集合
    const loots = FS.readdirSync(lootDir, { withFileTypes: true, encoding: "utf-8" });

    // 遍历所有战利品
    for (let i = 0; i < loots.length; i++) {
        // 一个战利品
        const loot = loots[i];

        // 如果是目录，递归获取更深层次的战利品分类，例如：chests\aviary\aviary_barrels
        if (loot.isDirectory()) {
            count += createLootFolders(loot);
            continue;
        }

        // 根据战利品 json 文件创建对应的战利品目录
        if (loot.isFile() && PT.extname(loot.name) == ".json") {
            // 名此
            const filename = PT.basename(loot.name, ".json");
            // 战利品目录路径
            const newPath = PT.join(loot.parentPath, filename);
            // .keep 文件路径
            const keep = PT.join(newPath, ".keep");
            // 战利品目录空间
            const namespace = newPath.replace(KJS_SER_S, "");
            // 原战利品 json 文件路径（参考用的）
            const jsonPath = PT.join(loot.parentPath, loot.name);

            // 目录存在跳过
            if (FS.existsSync(newPath) && FS.statSync(newPath).isDirectory()) continue;

            // console.log(loot.parentPath ,filename);
            FS.mkdirSync(newPath);

            // .keep 元数据
            const types = namespace.split(/\\/g).filter(type => type && type != LOOT_NAME);
            const keepsText = [namespace, `loot spawn 0 -60 0 loot ${types.shift()}:${types.join("/")}`];

            // 创建 .keep 文件
            if (DOT_KEEP && !FS.existsSync(keep)) FS.writeFileSync(keep, keepsText.join("\r\n"), { encoding: "utf-8", flag: "w" });
            // 删除 json 文件
            if (DEL_FOR_JSON && FS.existsSync(jsonPath) && FS.statSync(jsonPath).isFile()) FS.unlinkSync(jsonPath);

            // debug
            console.log(namespace, DEL_FOR_JSON ? loot.name : "");
            count++;
        }
    }

    // 返回创建了战利品目录数量
    return count;
}

/**
 * 主函数
 */
function main() {
    // 统计
    let lootGlobalCount = 0;
    let lootGlobalModCount = 0;
    // 所有的模组目录
    const listModDirent = FS.readdirSync(KJS_SER_S, { withFileTypes: true, encoding: "utf-8" }).filter(i => i.isDirectory());

    // 遍历所有模组目录
    for (let i = 0; i < listModDirent.length; i++) {
        // 统计本次战利品数量
        let lootCount = 0;
        // 模组目录
        const modDirent = listModDirent[i];
        // 战利品目录
        const lootDir = PT.join(KJS_SER_S, modDirent.name, LOOT_NAME);

        //  战利品目录不存在跳过
        if (!FS.existsSync(lootDir) || !FS.statSync(lootDir).isDirectory()) continue;

        // 获取战利品种类
        const listLootDirent = FS.readdirSync(lootDir, { withFileTypes: true, encoding: "utf-8" }).filter(i => i.isDirectory());

        // 创建目录
        listLootDirent.forEach(loot => {
            lootCount += createLootFolders(loot);
            modCount = 1;
        });

        // debug
        console.log(lootCount);
        console.log("----------------------------------");

        // 累加
        lootGlobalCount += lootCount;
        lootGlobalModCount++;
    }

    // debug
    console.log("===============================");
    console.log("loot tables has:", lootGlobalModCount);
    console.log("loot count:", lootGlobalCount);
}

// 运行脚本
main(false);
