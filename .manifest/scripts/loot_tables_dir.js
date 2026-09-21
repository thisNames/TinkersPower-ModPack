const FS = require("node:fs");
const PT = require("node:path");

// kjs 服务端脚本路径
const KJS_SER_S = PT.join(process.cwd(), "kubejs/server_scripts");
// 战利品目录名此
const LOOT_NAME = "loot_tables";
// 是否创建 .keep 文件
const DOT_KEEP = true;

/**
 * 创建战利品目录
 * @param {FS.Dirent} lootDirent 战利品类型
 */
function createLootFolders(lootDirent)
{
    let count = 0;

    const lootDir = PT.join(lootDirent.parentPath, lootDirent.name);
    const loots = FS.readdirSync(lootDir, { withFileTypes: true, encoding: "utf-8" });

    // 遍历所有战利品
    for (let i = 0; i < loots.length; i++)
    {
        const loot = loots[i];

        if (loot.isDirectory())
        {
            count += createLootFolders(loot);
            continue;
        }

        if (loot.isFile() && PT.extname(loot.name) == ".json")
        {
            const filename = PT.basename(loot.name, ".json");
            const newPath = PT.join(loot.parentPath, filename);
            const keep = PT.join(newPath, ".keep");
            const namespace = newPath.replace(KJS_SER_S, "");

            // 目录存在跳过
            if (FS.existsSync(newPath) && FS.statSync(newPath).isDirectory())
            {
                // 创建 .keep 文件
                if (DOT_KEEP && !FS.existsSync(keep)) FS.writeFileSync(keep, namespace, { encoding: "utf-8", flag: "w" });

                continue;
            }

            // console.log(loot.parentPath ,filename);
            FS.mkdirSync(newPath);

            // 创建 .keep 文件
            if (DOT_KEEP && !FS.existsSync(keep)) FS.writeFileSync(keep, namespace, { encoding: "utf-8", flag: "w" });

            // debug
            console.log(namespace);
            count++;
        }
    }

    return count;
}

/**
 * 主函数
 */
function main()
{
    // 所有的模组目录
    const listModDirent = FS.readdirSync(KJS_SER_S, { withFileTypes: true, encoding: "utf-8" }).filter(i => i.isDirectory());

    // 统计
    let lootGlobalCount = 0;
    let lootGlobalModCount = 0;

    // 遍历所有模组目录
    for (let i = 0; i < listModDirent.length; i++)
    {
        // 统计战利品数量
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
        listLootDirent.forEach(loot =>
        {
            lootCount += createLootFolders(loot);
            modCount = 1;
        });

        // debug
        console.log(lootCount);
        console.log("----------------------------------");

        lootGlobalCount += lootCount;
        lootGlobalModCount++;
    }

    // debug
    console.log("===============================");
    console.log("loot tables has:", lootGlobalModCount);
    console.log("loot count:", lootGlobalCount);
}

main(false);
