/**
 * reskillable_skill_locks.js 依赖
 */

/**
 * 技能锁
 */
class SkillLockItem
{
    /**
     * 一个技能锁对象
     * @param {string} id 技能 ID
     * @param {number} level 所需等级
     */
    constructor(id, level)
    {
        /** @type {string} 技能 ID */
        this.id = id;

        /** @type {number} 所需等级 */
        this.level = level;
    }
}

/**
 * 技能锁
 */
class SkillLocks
{
    /**
     * 创建技能锁对象
     * @param {string} namespace 模组命名空间
     */
    constructor(namespace)
    {
        this.namespace = namespace;

        /** @type {Array<SkillLockItem>} 所需等级数组 */
        this.locks = [];

        /** @type {Array<string>} 物品 ID 集合 */
        this.items = [];
    }

    /**
     * 添加技能
     * @param {SkillLockItem} lock 技能
     * @returns {SkillLocks} this
     */
    addLock(lock)
    {
        this.locks.push(lock);

        return this;
    }

    /**
     * 添加物品
     * @param {string} item 物品 ID
     * @returns {SkillLocks} this
     */
    addItem(item)
    {
        this.items.push(item);
        
        return this;
    }

    /**
     * 生成数据配置
     * @param {Map<string, Array<string>>} map map
     * @returns {SkillLocks} this
     */
    generator(map)
    {
        const locks = this.locks.map(m => m.id + ":" + m.level);

        for (let i = 0; i < this.items.length; i++)
        {
            const item = this.items[i];
            const fullId = this.namespace + ":" + item;

            map.set(fullId, locks);
        }

        return this;
    }
}

module.exports = {
    SkillLockItem,
    SkillLocks
};
