const FS = require("node:fs");
const PT = require("node:path");

const { Logger } = require("./library/logger");

// 日志
const logger = new Logger("clear_logs", PT.basename(__filename));

// 之前的清理日志文件 .gz
const LOG_DIR = PT.join(process.cwd(), "logs");
const LOG_FILES = FS.readdirSync(LOG_DIR);

// 删除所有 .gz 文件
for (const file of LOG_FILES)
{
    if (file.endsWith(".gz"))
    {
        FS.unlinkSync(PT.join(LOG_DIR, file));
        logger.info(`Deleted ${file}`);
    }
}

logger.info(`Done is Total: ${LOG_FILES.filter(file => file.endsWith(".gz")).length}`);
logger.close();
