/**
 * 生成语言文件
 */

const PT = require("node:path");

const { Logger } = require("./library/logger");
const { BuildOption } = require("./library/build");
const { TranslatableBuilder, TranslatableOption } = require("./library/translatable");

// 日志
const logger = new Logger("build_language_" + Date.now(), PT.basename(__filename));
// 生成器
const builder = new TranslatableBuilder(new TranslatableOption(BuildOption.PACKAGE_JSON));
// 差异记录
const diffs = [];

builder.onCounting((target, count, diff, alignment) =>
{
    const line = `target: ${target}, alignment: ${alignment}, count: ${count}, diff: ${diff}`;
    
    if (diff != 0) diffs.push(line);

    logger.info(line);
});

// 计数
const total = builder.builder();

// 差异
if (diffs.length > 0)
{
    logger.info("========== diff ==========");

    diffs.forEach(l => logger.info(l));
}

// 统计
logger.info("key total: " + total);
logger.close();
