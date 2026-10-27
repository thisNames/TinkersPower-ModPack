/**
 * 对齐 options.txt（每次 Git Commit 必做）
 */

const FS = require("node:fs");
const PT = require("node:path");

const { Logger } = require("./library/logger");

const OPTIONS_TXT = "options.txt";
// const OPTIONS_TXT_OLD = "options.txt.old";

// 日志
const logger = new Logger("alignment_options", PT.basename(__filename));

// 拆解
const buffer = FS.readFileSync(OPTIONS_TXT, "utf-8");
const projects = buffer.split("\r\n").filter(p => p);
const options = new Map();

// 解析
for (let i = 0; i < projects.length; i++)
{
    const project = projects[i];
    const index = project.indexOf(":");
    const key = project.substring(0, index);
    const value = project.substring(index + 1);

    // 存表
    options.set(key, value);
}

// 排序
const keyOptions = [...options.keys()].sort();
const fileOptions = FS.openSync(OPTIONS_TXT, "w");

// 写入
// FS.writeFileSync(OPTIONS_TXT_OLD, buffer, { encoding: "utf-8", flag: "w" });
// logger.info("copying: " + OPTIONS_TXT_OLD);

for (let i = 0; i < keyOptions.length; i++)
{
    const key = keyOptions[i];
    const value = options.get(key);
    const option = `${key}:${value}`;

    // 写入
    FS.writeSync(fileOptions, option.concat("\r\n"), null, "utf-8");
    logger.info("write => " + option);
}

FS.closeSync(fileOptions);
logger.info("options: " + keyOptions.length)
logger.close();
