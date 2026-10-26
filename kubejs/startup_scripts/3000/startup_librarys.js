// priority: 3000

/**
 * 判断实体是否穿戴了指定的盔甲组合（不要求全套）
 * @param {Internal.LivingEntity} entity 目标实体
 * @param {string[]} armorIds 长度 4 的数组：[头盔, 胸甲, 护腿, 靴子]，空字符串表示不要求
 * @returns {boolean} 是否所有“要求”的部位都穿戴了对应物品
 */
function wearsArmor(entity, armorIds)
{
    // 使用 KubeJS 的部位专用属性，直接取对应槽位，避免依赖 armorSlots 的 Iterable 顺序
    // armorIds 顺序：[0] 头盔、[1] 胸甲、[2] 护腿、[3] 靴子

    // 头盔：有要求时才取、才检查
    if (armorIds[0])
    {
        const head = entity.headArmorItem;
        if (!head || head.empty || head.id != armorIds[0]) return false;
    }

    // 胸甲：有要求时才取、才检查
    if (armorIds[1])
    {
        const chest = entity.chestArmorItem;
        if (!chest || chest.empty || chest.id != armorIds[1]) return false;
    }

    // 护腿：有要求时才取、才检查
    if (armorIds[2])
    {
        const legs = entity.legsArmorItem;
        if (!legs || legs.empty || legs.id != armorIds[2]) return false;
    }

    // 靴子：有要求时才取、才检查
    if (armorIds[3])
    {
        const boots = entity.feetArmorItem;
        if (!boots || boots.empty || boots.id != armorIds[3]) return false;
    }

    return true;
}

/**
 * 判断实体主手/副手是否持有指定物品
 * @param {Internal.LivingEntity} entity 目标实体
 * @param {string[]} handIds 长度 2 的数组：[主手, 副手]，空字符串表示不要求
 * @returns {boolean} 是否所有“要求”的手都持有对应物品
 */
function holdsItems(entity, handIds)
{
    const main = entity.mainHandItem;
    const off = entity.offHandItem;

    // 主手：有要求时才检查（main 为 null 表示该实体没有主手）
    if (handIds[0])
    {
        if (!main || main.empty || main.id != handIds[0]) return false;
    }

    // 副手：有要求时才检查（off 为 null 表示该实体没有副手）
    if (handIds[1])
    {
        if (!off || off.empty || off.id != handIds[1]) return false;
    }

    return true;
}

/**
 * 按目标等级给实体应用/修正状态效果
 * 规则：
 * 1. 没有该效果 → 添加；
 * 2. 当前等级与目标等级不一致 → 先移除旧效果再按新等级添加
 * 3. 等级一致但剩余时间不足 refreshBelow 时 → 刷新续时长。
 * @param {Internal.LivingEntity} entity 目标实体
 * @param {Internal.MobEffect_} effectId 状态效果 ID
 * @param {number} level 目标等级（amplifier，0 = 一级效果）
 * @param {number} duration 效果时长（tick，20 tick = 1 秒）
 * @param {number} [refreshBelow=100] 剩余时间低于该值（tick）时刷新，默认 100 tick（5 秒）
 */
function applyEffectLevel(entity, effectId, level, duration, refreshBelow)
{
    // 未显式指定刷新阈值时，默认 100 tick（5 秒）
    if (refreshBelow == null) refreshBelow = 100;

    // 读取玩家当前已有的该效果
    const effect = entity.getEffect(effectId);

    // 1. 没有该效果 → 直接添加
    if (effect == null)
    {
        entity.potionEffects.add(effectId, duration, level, false, true);
    }
    // 2. 等级不一致 → 先移除旧效果，再按新等级添加（原版 addEffect 只升不降，必须 remove 才能降级）
    else if (level != effect.getAmplifier())
    {
        entity.removeEffect(effectId);
        entity.potionEffects.add(effectId, duration, level, false, true);
    }
    // 3. 等级一致但剩余时间不足阈值 → 刷新续时长
    else if (effect.getDuration() < refreshBelow)
    {
        entity.potionEffects.add(effectId, duration, level, false, true);
    }
}

/**
 * 修改可通过 KJS 修改的盔甲耐久值 
 * @description 目前不修改：盔甲值、盔甲韧性
 * @param {Internal.ItemModificationEventJS} event 修改对象
 * @param {Special.Item} id 物品 ID 字符串
 * @param {number} damage 耐久
 * @param {number} protection 盔甲值
 * @param {number} toughness 盔甲韧性
 */
function incArrmor(event, id, damage, protection, toughness)
{
    if(!event)
    {
        console.error(`incArrmor: ${id}, event param is null.`);
        return;
    }

    event.modify(id, c =>
    {
        c.maxDamage = damage;
        // c.armorProtection = protection;
        // c.armorToughness = toughness;
    });
}
