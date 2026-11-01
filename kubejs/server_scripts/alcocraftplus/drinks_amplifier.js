/**
 * 喝啤酒加正面效果等级，但是不加自己提供的效果：最高 3 级
 */

/**
 * 啤酒最高等级到 3 级
 * @type {string}
 */
const alcocraftplus_drinks_amplifier_max = 3;

/**
 * 全局忽略增加等级表
 * @type {Set<string>}
 */
const alcocraftplus_drinks_amplifier_global_tables = niTokeysServer([
    "toughasnails:climate_clemency",
    "toughasnails:internal_warmth",
    "toughasnails:internal_chill"
]);

/**
 * 啤酒提供效果等级加加的物品表
 * key：物品的 ID
 * value：忽略的效果 ID
 * @type {Map<string, Set<string>>}
 */
const alcocraftplus_drinks_amplifier_tables = new Map([
    ["alcocraftplus:kvass", niTokeysServer(["minecraft:health_boost", "vinery:health_effect", "minecraft:saturation"])],
    ["alcocraftplus:chorus_ale", niTokeysServer(["minecraft:luck"])],
    ["alcocraftplus:digger_bitter", niTokeysServer(["minecraft:haste"])],
    ["alcocraftplus:drowned_ale", niTokeysServer(["minecraft:water_breathing", "minecraft:dolphins_grace"])],
    ["alcocraftplus:ice_beer", niTokeysServer(["alcocraftplus:freeze"])],
    ["alcocraftplus:leprechaun_cider", niTokeysServer(["minecraft:luck"])],
    ["alcocraftplus:magnet_pilsner", niTokeysServer(["alcocraftplus:attract", "vinery:magnet"])],
    ["alcocraftplus:nether_porter", niTokeysServer(["minecraft:fire_resistance"])],
    ["alcocraftplus:nether_star_lager", niTokeysServer(["minecraft:speed", "minecraft:strength", "minecraft:luck", "minecraft:health_boost", "minecraft:jump_boost", "vinery:health_effect"])],
    ["alcocraftplus:night_rauch", niTokeysServer(["minecraft:night_vision", "alcocraftplus:phantom"])],
    ["alcocraftplus:sun_pale_ale", niTokeysServer(["minecraft:regeneration"])],
    ["alcocraftplus:wither_stout", niTokeysServer(["alcocraftplus:wither"])]
]);


// 吃监听
ItemEvents.foodEaten(event =>
{
    // 物品
    const item = event.getItem();

    // 空
    if (item.isEmpty()) return;

    // 资源
    const itemLocation = item.getIdLocation();
    const id = nToiServer(itemLocation.getNamespace(), itemLocation.getPath());
    const player = event.getPlayer();

    // 是否是表中物品
    if (!alcocraftplus_drinks_amplifier_tables.has(id)) return;
    // 只对玩家生效
    if (!player || !player.isLiving()) return;

    // 取出要忽略的效果集合
    const ignore = alcocraftplus_drinks_amplifier_tables.get(id);

    // 增加已有的正面效果的等级
    player.getActiveEffectsMap().forEach((effect, effectId) =>
    {
        // 正面效果
        if (!effect.isBeneficial()) return;

        // 转为效果字符串
        const effectKey = effect.getDescriptionId() + "";

        // 全局忽略
        if (alcocraftplus_drinks_amplifier_global_tables.has(effectKey)) return;

        // 跳过酒自身提供的效果
        if (ignore && ignore.has(effectKey)) return;

        // 当前等级
        const curAmplifier = effectId.getAmplifier();
        // 下一级
        const nextAmplifier = Math.min(curAmplifier + 1, alcocraftplus_drinks_amplifier_max - 1);

        // 大于
        if (nextAmplifier > curAmplifier && nextAmplifier > 0)
        {
            // 追加
            player.potionEffects.add(effect, effectId.getDuration(), nextAmplifier);
        }
    });
});
