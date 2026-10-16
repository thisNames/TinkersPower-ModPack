// priority: 2000

// ========================= 类型定义
/**
 * @typedef {(ctx: Internal.SlotContext, stack: Internal.ItemStack) => void} onServerCurioSHandler 饰品能力句柄
 */

/**
 * 能力句柄
 */
function ServerClassCapHandler()
{
    /** @type {onServerCurioSHandler} 穿戴时 */
    this.equip = null;

    /** @type {onServerCurioSHandler} 实时更新 */
    this.tick = null;

    /** @type {onServerCurioSHandler} 卸下时 */
    this.unequip = null;
}

/**
 * 穿戴元数据对象
 * @param {Internal.SlotContext} cxt 饰品上下文对象
 * @param {Internal.ItemStack} stack 物品实例对象
 */
function ServerClassWearMeta(cxt, stack)
{
    /** @type {Internal.SlotContext} 饰品上下文对象 */
    this.ctx = cxt;

    /** @type {Internal.ItemStack} 物品实例对象 */
    this.stack = stack;
}

/**
 * 能力入口
 */
function ServerClassCapEntry()
{
    /** @type {ServerClassCapHandler} 能力句柄 */
    this.handler = new ServerClassCapHandler();

    /** @type {Map<string, ServerClassWearMeta>} 穿戴者元数据对象（key = 实体UUID@槽位类型-槽位索引，见 getServerCuriosSloKey）*/
    this.wearers = new Map();
}

/**
 * 饰品对象
 * @param {ServerClassCapEntry} entry 能力入口
 */
function ServerClassCapCurios(entry)
{
    /** @type {(callback: onServerCurioSHandler) => ServerClassCapCurios} 穿戴时 */
    this.onEquip = function (callback)
    {
        entry.handler.equip = callback;

        return this;
    }

    /** @type {(callback: onServerCurioSHandler) => ServerClassCapCurios} 实时更新 */
    this.onCurioTick = function (callback)
    {
        entry.handler.tick = callback;

        return this;
    }

    /** @type {(callback: onServerCurioSHandler) => ServerClassCapCurios} 卸下时 */
    this.onUnequip = function (callback)
    {
        entry.handler.unequip = callback;

        return this;
    }
}

// ========================= 内部变量
/** @type {Map<Internal.Ingredient, ServerClassCapEntry>} 饰品全局事件总线 */
const __ServerClassCapCurios = new Map();

// ========================= 外部接口
/**
 * 获取穿戴者
 * @param {Internal.SlotContext} ctx 饰品上下文对象
 * @returns {string}
 */
function getServerCuriosWearer(ctx)
{
    const key = "@" + ctx.entity().uuid;
    return key;
}

/**
 * 订阅能力（含覆盖）
 * @param {Internal.Ingredient} ingredient 物品
 * @returns {ServerClassCapCurios}
 */
function onServerSubCapability(ingredient)
{
    // 非空拦截
    if (ingredient == null || ingredient.isEmpty()) throw new Error("Attempt to subscribe to accessories for an empty item.");

    // 入口能力
    const entry = new ServerClassCapEntry();

    // 添加到饰品全局事件总线（全新的）
    __ServerClassCapCurios.set(ingredient, entry);

    return new ServerClassCapCurios(entry);
}

// ========================= 监听区域（事件分发）
// // 此事件是尝试穿戴，并不是表示穿戴成功
// CuriosJSEvents.equip(event =>
// {
//     // 仅限玩家
//     if (!event.entity.isPlayer()) return;

//     // 槽位不符合
//     if (!event.stack.hasTag("curios:" + event.slotContext.identifier())) return;

//     console.log("equip slot: " + event.entity.curiosInventory.getStacksHandler(event.slotContext.identifier()).get().getSlots());
//     console.log("equip index: " + event.slotContext.index());

//     // 遍历所有已经订阅的饰品
//     __ServerClassCapCurios.forEach((entry, ingredient) =>
//     {
//         // if (!event.slotContext.entity().isCuriosEquipped(event.stack)) return;

//         // 如果不在这个订阅列表里则跳过
//         if (!ingredient.test(event.stack)) return;

//         // 获取穿戴者
//         const wearer = getServerCuriosWearer(event.slotContext);

//         // 已存在则跳过
//         if (entry.wearers.has(wearer)) return;

//         // 添加穿戴者
//         entry.wearers.set(wearer, new ServerClassWearMeta(event.slotContext, event.stack));
//         // 触发穿戴事件
//         entry.handler.equip && entry.handler.equip(event.slotContext, event.stack);
//     });
// });

// // 此事件是尝试卸下，并不是表示卸下成功
// CuriosJSEvents.unequip(event =>
// {
//     // 仅限玩家
//     if (!event.entity.isPlayer()) return;

//     // 遍历所有已经订阅的饰品
//     __ServerClassCapCurios.forEach((entry, ingredient) =>
//     {
//         // 如果不在这个订阅列表里则跳过
//         if (!ingredient.test(event.stack)) return;

//         // 获取穿戴者
//         const wearer = getServerCuriosWearer(event.slotContext);

//         // 不已存在则跳过
//         if (!entry.wearers.has(wearer)) return;

//         // 移除穿戴者
//         entry.wearers.delete(wearer);

//         // 触发卸下事件
//         entry.handler.unequip && entry.handler.unequip(event.slotContext, event.stack);
//     });
// });

// ServerEvents.tick(event =>
// {
//     // 遍历所有已经订阅的饰品
//     __ServerClassCapCurios.forEach((entry, ingredient) =>
//     {
//         // 执行实时更新事件
//         entry.handler.tick && entry.wearers.forEach((meta, key) => entry.handler.tick(meta.ctx, meta.stack));
//     });
// });
