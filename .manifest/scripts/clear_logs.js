const FS = require("node:fs");
const PT = require("node:path");


// 之前的清理日志文件 .gz
const LOG_DIR = PT.join(process.cwd(), "logs");
const LOG_FILES = FS.readdirSync(LOG_DIR);

// 删除所有 .gz 文件
for (const file of LOG_FILES)
{
    if (file.endsWith(".gz"))
    {
        FS.unlinkSync(PT.join(LOG_DIR, file));
        console.log(`Deleted ${file}`);
    }
}

console.log("Done is Total:", LOG_FILES.filter(file => file.endsWith(".gz")).length);
