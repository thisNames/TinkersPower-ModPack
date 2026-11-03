/**
 * “编译”项目配置、脚本（不含打包）（每次 Git Commit 必做）
 */

const PT = require("node:path");

const { Logger } = require("./library/logger");

// 日志
const logger = new Logger("compiled", PT.basename(__filename));
/** @type {Map<string, number>} 时长统计表 */
const timeTables = new Map();


/**
 * 添加到时间统计表
 * @param {string} key 名称
 * @param {number} time 时间
 * @returns {number}
 */
function addTimeTables(key, time)
{
    timeTables.set(key, time);

    return time;
}


// 统计
let startTime = 0;

// 1. 对其配置
logger.info("compiled: alignment_options");

startTime = Date.now();
require("./alignment_options");

logger.info("ut: " + addTimeTables("alignment_options_ut", Date.now() - startTime));
logger.info("=========================================");


// 2. 刷新技能限制
logger.info("compiled: reskillable_skill_locks");

startTime = Date.now();
require("./reskillable_skill_locks");

logger.info("ut: " + addTimeTables("reskillable_skill_locks_ut", Date.now() - startTime));
logger.info("=========================================");


// 3. 刷新物品物品配置
logger.info("compiled: itemphysic_general");

startTime = Date.now();
require("./itemphysic_general");

logger.info("ut: " + addTimeTables("itemphysic_general_ut", Date.now() - startTime));
logger.info("=========================================");


// 4. 刷新默认配置
logger.info("compiled: defaultconfigs");

startTime = Date.now();
require("./defaultconfigs");

logger.info("ut: " + addTimeTables("defaultconfigs_ut", Date.now() - startTime));
logger.info("=========================================");


// 5. 生成战利品目录
logger.info("compiled: loot_tables_dir");

startTime = Date.now();
require("./loot_tables_dir");

logger.info("ut: " + addTimeTables("loot_tables_dir_ut", Date.now() - startTime));
logger.info("=========================================");


// 6. 刷新禁用物品配置
logger.info("compiled: ban_generator");

startTime = Date.now();
require("./ban_generator");

logger.info("ut: " + addTimeTables("ban_generator_ut", Date.now() - startTime));
logger.info("=========================================");


// 7. 清除日志
logger.info("compiled: clear_logs");

startTime = Date.now();
require("./clear_logs");

logger.info("ut: " + addTimeTables("clear_logs_ut", Date.now() - startTime));
logger.info("=========================================");

// 统计实时
let totalTime = 0;

timeTables.forEach((value, key) =>
{
    totalTime += value;

    logger.info(key + " => " + value + "ms");
});

logger.info("total: " + totalTime + "ms");
logger.close();
