/**
 * itemphysic_general.js 依赖
 */

// =============== 通用类 ===============

/**
 * 物品实体类
 */
class ItemPhysicEntrie
{
    /**
     * 创建一个物品实体
     * @param {"item"} id 类型
     * @param {string} item 物品 ID
     */
    constructor(id, item)
    {
        /** @type {string} 类型 */
        this.id = id;

        /** @type {string} item 物品 ID */
        this.item = item;
    }

    /**
     * 将自己转为字符串
     * @returns {string}
     */
    get()
    {
        return `{id:\"${this.id}\",item:\"${this.item}\"}`;
    }
}

/**
 * 物品实体集合
 */
class ItemPhysicItems
{
    /**
     * 创建物品实体集合
     * @param {Array<string>} entries 物品实体集合
     */
    constructor(entries)
    {
        /** @type {Array<string>} 物品实体集合 */
        this.entries = entries;

        /** @type {boolean} 白名单 */
        this.isWhitelist = true;
    }

    /**
     * 添加一个实体物品
     * @param {string} item ItemPhysicEntrie 字符串
     * @returns {ItemPhysicItems} this
     */
    put(item)
    {
        this.entries.push(item);

        return this;
    }

    /**
     * 去重
     * @returns {ItemPhysicItems} this
     */
    set()
    {
        this.entries = [...new Set(this.entries)];

        return this;
    }
}

// =============== 1 级类 ===============

/**
 * 生成配置类
 */
class ItemPhysicGeneral
{
    /**
     * 创建生成配置
     * @param {ItemPhysicItems} swimmingItems 可浮在水面上的物品
     * @param {ItemPhysicItems} burningItems 可烧毁的物品
     * @param {ItemPhysicItems} undestroyableItems 不毁的物品
     */
    constructor(swimmingItems, burningItems, undestroyableItems)
    {
        this.fallSounds = true;
        this.disableCactusDamage = true;
        this.vanillaFlowBehavior = false;

        /** @type {ItemPhysicItems} 可浮在水面上的物品 */
        this.swimmingItems = swimmingItems;

        /** @type {ItemPhysicItems} 可烧毁的物品 */
        this.burningItems = burningItems;

        /** @type {ItemPhysicItems} 不毁的物品 */
        this.undestroyableItems = undestroyableItems;
    }
}

/**
 * 自动拾取配置类
 */
class ItemPhysicPickup
{
    /**
     * 创建自动拾取配置
     * @param {ItemPhysicItems} alwaysPickup 自动拾取配置
     */
    constructor(alwaysPickup)
    {
        this.customPickup = true;
        this.pickupWhenSneaking = true;
        this.pickupNormally = false;
        this.walkOverRange = 1;
        this.maximumPickupRange = 5;
        this.hitboxIncrease = 0.2;

        /** @type {ItemPhysicItems} */
        this.alwaysPickup = alwaysPickup;
    }
}

/**
 * 投掷配置类
 */
class ItemPhysicIPThrow
{
    constructor()
    {
        this.enabled = true;
        this.maxStages = 6;
        this.multiplierPerStage = 1;
        this.stageChargeTime = 10;
    }
}

// =============== 基类 ===============

/**
 * 物理物品配置类
 */
class ItemPhysicConfig
{
    /**
     * 创建物理物品配置
     * @param {Object} config 原始配置对象
     */
    constructor(config)
    {
        /** @type {ItemPhysicGeneral} general 生成 */
        this.general = null;

        /** @type {ItemPhysicPickup} pickup 拾取 */
        this.pickup = null;

        /** @type {ItemPhysicIPThrow} ipthrow 投掷 */
        this.throw = null;

        this.init(config);
    }

    /**
     * 初始化
     * @param {Object} config 配置
     * @returns {ItemPhysicConfig} this
     */
    init(config)
    {
        const swimmingItems = new ItemPhysicItems(config.general.swimmingItems.entries.map(i => i));
        const burningItems = new ItemPhysicItems(config.general.burningItems.entries.map(i => i));
        const undestroyableItems = new ItemPhysicItems(config.general.undestroyableItems.entries.map(i => i));
        const alwaysPickup = new ItemPhysicItems(config.pickup.alwaysPickup.entries.map(i => i));

        // 生成
        this.general = new ItemPhysicGeneral(swimmingItems, burningItems, undestroyableItems);
        this.general.fallSounds = config.general.fallSounds;
        this.general.disableCactusDamage = config.general.disableCactusDamage;
        this.general.vanillaFlowBehavior = config.general.vanillaFlowBehavior;

        // 拾取
        this.pickup = new ItemPhysicPickup(alwaysPickup);
        this.pickup.customPickup = config.pickup.customPickup;
        this.pickup.pickupWhenSneaking = config.pickup.pickupWhenSneaking;
        this.pickup.pickupNormally = config.pickup.pickupNormally;
        this.pickup.walkOverRange = config.pickup.walkOverRange;
        this.pickup.walkOverRange = config.pickup.walkOverRange;
        this.pickup.maximumPickupRange = config.pickup.maximumPickupRange;
        this.pickup.hitboxIncrease = config.pickup.hitboxIncrease;

        // 投掷
        this.throw = new ItemPhysicIPThrow();
        this.throw.enabled = config.throw.enabled;
        this.throw.maxStages = config.throw.maxStages;
        this.throw.multiplierPerStage = config.throw.multiplierPerStage;
        this.throw.stageChargeTime = config.throw.stageChargeTime;

        return this;
    }

    /**
     * 将自己转为字符串
     * @returns {string}
     */
    get()
    {
        return JSON.stringify(this, null, 2);
    }

    /**
     * 添加一个：可烧毁的物品
     * @param {string} item ItemPhysicEntrie 字符串
     * @returns {ItemPhysicConfig} this
     */
    putBurningItem(item)
    {
        this.general.burningItems.put(item);

        return this;
    }

    /**
     * 添加一个：可浮在水面上的物品
     * @param {string} item ItemPhysicEntrie 字符串
     * @returns {ItemPhysicConfig} this
     */
    putSwimmingItem(item)
    {
        this.general.swimmingItems.put(item);

        return this;
    }

    /**
     * 添加一个：不毁的物品
     * @param {string} item ItemPhysicEntrie 字符串
     * @returns {ItemPhysicConfig} this
     */
    putUndestroyableItem(item)
    {
        this.general.undestroyableItems.put(item);

        return this;
    }

    /**
     * 获取数量
     * @returns {number}
     * @returns {ItemPhysicConfig} this
     */
    getBurningSize()
    {
        return this.general.burningItems.entries.length;
    }

    /**
     * 获取数量
     * @returns {number}
     * @returns {ItemPhysicConfig} this
     */
    getSwimmingSize()
    {
        return this.general.swimmingItems.entries.length;
    }

    /**
     * 获取数量
     * @returns {number}
     */
    getUndestroyableSize()
    {
        return this.general.undestroyableItems.entries.length;
    }
}

module.exports = {
    ItemPhysicEntrie,
    ItemPhysicItems,
    ItemPhysicGeneral,
    ItemPhysicPickup,
    ItemPhysicIPThrow,
    ItemPhysicConfig
};
