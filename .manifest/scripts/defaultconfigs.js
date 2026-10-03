const FS = require("node:fs");
const PT = require("node:path");

const DEF_CFG = "defaultconfigs";
const SAVES = "saves";

const listConfigDirent = FS.readdirSync(DEF_CFG, { withFileTypes: true, encoding: "utf-8" });
const listSaveDirent = FS.readdirSync(SAVES, { withFileTypes: true, encoding: "utf-8" });

for (let i = 0; i < listConfigDirent.length; i++)
{
    const cfg = listConfigDirent[i];

    if (cfg.isFile() && PT.extname(cfg.name) == ".toml")
    {
        const cfgData = FS.readFileSync(PT.join(cfg.parentPath, cfg.name), "utf-8");

        for (let j = 0; j < listSaveDirent.length; j++)
        {
            const save = listSaveDirent[j];
            const serverconfig = PT.join(save.parentPath, save.name, "serverconfig");

            if (FS.existsSync(serverconfig) && FS.statSync(serverconfig).isDirectory())
            {
                const config = PT.join(serverconfig, cfg.name);

                FS.writeFileSync(config, cfgData, "utf-8", { flag: "w" });

                console.log("write config:", config);
            }
        }
    }
}
