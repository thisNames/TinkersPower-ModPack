/**
 * 生成语言文件
 */

const PT = require("node:path");

const { Logger } = require("./library/logger");
const { BuildOption } = require("./library/build");
const { TranslatableBuilder, TranslatableOption } = require("./library/translatable");

// 日志
const logger = new Logger("build_language", PT.basename(__filename));
// 生成器
const builder = new TranslatableBuilder(new TranslatableOption(BuildOption.PACKAGE_JSON));

builder.onCounting((target, count, diff, alignment) =>
{
    logger.info(`target: ${target}, alignment: ${alignment}, count: ${count}, diff: ${diff}`);
});

// 计数
const total = builder.builder();

// 统计
logger.info("key total: " + total);
logger.close();
