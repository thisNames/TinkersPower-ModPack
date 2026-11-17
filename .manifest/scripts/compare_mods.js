/**
 * 将清单和模组目录进行比较
 */

const PT = require("node:path");

const { Logger } = require("./library/logger");
const { LocationCompareMods } = require("./library/compares");

// 日志
const logger = new Logger("compares_mod", PT.basename(__filename));
// 比较对象
const compare = new LocationCompareMods("mods", ".manifest/mods.json");
// 结果
const result = compare.compare();

// 模组清单文件
logger.info("manifest nothing:");

result.manifest.forEach(item => logger.info(item));

logger.info("manifest nothing: " + result.manifest.length);

logger.info("================ ↑ ↓");

// 本地目录文件
logger.info("mods nothing:");

result.mods.forEach(item => logger.info(item));

logger.info("mods nothing: " + result.mods.length);

// 比较显示（以清单文件为标准）
logger.info("<========= location mods diff manifest =========>");

result.manifest.forEach(item => logger.info("-- " + item));
result.mods.forEach(item => logger.info("++ " + item));

logger.info("diff: " + (result.manifest.length + result.mods.length));

logger.close();
