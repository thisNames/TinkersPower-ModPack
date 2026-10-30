/**
 * 构建技能限制锁
 */

const FS = require("node:fs");
const PT = require("node:path");

const { Logger } = require("./library/logger");
const { SkillLockItem, SkillLocks } = require("./library/skill");

// 日志
const logger = new Logger("reskillable_skill_locks", PT.basename(__filename));

// 模板路径
const SKILL_LOCK_ROOT = "config_template/reskillable/skill_locks";
// 模组配置路径
const SKILL_LOCK_CONFIG = "config/reskillable/skill_locks.json";

/** @type {Map<string, Array<string>>} skillLocks */
const SKILL_LOCK_MAP = new Map();

// 统计
let itemsTotal = 0;
// 所有的模组目录
const listDirent = FS.readdirSync(SKILL_LOCK_ROOT, { encoding: "utf-8", withFileTypes: true });

// 获取所有模组
for (let i = 0; i < listDirent.length; i++)
{
    // 模组
    const namespace = listDirent[i];

    // 不是目录跳过
    if (!namespace.isDirectory()) continue;

    // 当前模组的配置
    const configDirent = FS.readdirSync(PT.join(namespace.parentPath, namespace.name), { encoding: "utf-8", withFileTypes: true });

    // 所有的配置文件
    for (let j = 0; j < configDirent.length; j++)
    {
        // 配置文件
        const config = configDirent[j];

        // 不是 json 跳过
        if (!config.isFile() || PT.extname(config.name) != ".json") continue;

        /** @type {{locks: Array<SkillLockItem>, items: Array<string>}} 配置对象 */
        const skills = JSON.parse(FS.readFileSync(PT.join(config.parentPath, config.name), "utf-8"));
        // 技能
        const skillLocks = new SkillLocks(namespace.name);

        skills.locks.forEach(sk => skillLocks.addLock(new SkillLockItem(sk.id, sk.level)));
        skills.items.forEach(em => skillLocks.addItem(em));

        skillLocks.generator(SKILL_LOCK_MAP);

        itemsTotal += skills.items.length;

        logger.info(namespace.name + ":" + config.name + " = " + skills.items.length);
    }
}

// 刷新模板配置
const template = { skillLocks: {} };

// 转为对象
for (const [key, value] of SKILL_LOCK_MAP)
{
    template.skillLocks[key] = value;
}

// 写入
FS.writeFileSync(SKILL_LOCK_CONFIG, JSON.stringify(template, null, 4), { encoding: "utf-8", flag: "w" });

// 统计
logger.info("write: " + SKILL_LOCK_CONFIG);
logger.info("total: " + itemsTotal);
logger.close();
