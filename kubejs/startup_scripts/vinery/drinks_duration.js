/**
 * 喝葡萄酒加正面等级时长，但是不加自己提供的效果：最高 6 分钟
 */

/**
 * 同一 tick 内执行一次表
 * @type {Map<string, number>}
 */
const vinery_drinks_diff_tables = new Map();

/**
 * 最大差值，如果小于此值则被去重
 * @type {number}
 */
const vinery_drinks_diff_max_tick = 2;

/**
 * 每瓶酒提供的基础时长
 * @type {number}
 */
const vinery_drinks_duration_base_tick = 800;

/**
 * 最大提供的时长
 * @type {number}
 */
const vinery_drinks_duration_max_tick = 7200;

/**
 * 全局忽略增加时长表
 * @type {Set<string>}
 */
const vinery_drinks_duration_global_tables = niTokeysStartup([
    "toughasnails:climate_clemency",
    "toughasnails:internal_warmth",
    "toughasnails:internal_chill"
]);

/**
 * 葡萄酒提供效果时长加加的物品表
 * key：物品的 ID
 * value：忽略的效果 ID
 * @type {Map<string, Set<string>>}
 */
const vinery_drinks_duration_tables = new Map([
    ["vinery:mead", niTokeysStartup(["minecraft:haste"])],
    ["vinery:apple_cider", niTokeysStartup(["minecraft:strength"])],
    ["vinery:apple_wine", niTokeysStartup(["minecraft:resistance"])],
    ["vinery:mellohi_wine", niTokeysStartup(["minecraft:instant_health"])],
    ["vinery:glowing_wine", niTokeysStartup(["minecraft:glowing"])],
    ["vinery:solaris_wine", niTokeysStartup(["minecraft:health_boost", "vinery:health_effect"])],
    ["vinery:noir_wine", niTokeysStartup(["minecraft:jump_boost"])],
    ["vinery:red_wine", niTokeysStartup(["minecraft:slow_falling"])],
    ["vinery:strad_wine", niTokeysStartup(["minecraft:night_vision"])],
    ["vinery:cherry_wine", niTokeysStartup(["minecraft:invisibility"])],
    ["vinery:cristel_wine", niTokeysStartup(["minecraft:water_breathing"])],
    ["vinery:creepers_crush", niTokeysStartup([])],
    ["vinery:kelp_cider", niTokeysStartup(["vinery:water_walker"])],
    ["vinery:lilitu_wine", niTokeysStartup(["vinery:party_effect"])],
    ["vinery:jo_special_mixture", niTokeysStartup(["vinery:climbing_effect"])],
    ["vinery:eiswein", niTokeysStartup(["vinery:frosty_armor"])],
    ["vinery:aegis_wine", niTokeysStartup(["vinery:armor_effect"])],
    ["vinery:bolvar_wine", niTokeysStartup(["vinery:lava_walker"])],
    ["vinery:chorus_wine", niTokeysStartup(["vinery:teleport"])],
    ["vinery:villagers_fright", niTokeysStartup(["minecraft:bad_omen"])],
    ["vinery:clark_wine", niTokeysStartup(["vinery:double_jump", "tconstruct:double_jump"])],
    ["vinery:magnetic_wine", niTokeysStartup(["vinery:magnet", "alcocraftplus:attract"])],
    ["vinery:stal_wine", niTokeysStartup(["vinery:health_effect", "minecraft:health_boost"])],
    ["vinery:chenet_wine", niTokeysStartup(["vinery:climbing_effect"])],
    ["vinery:bottle_mojang_noir", niTokeysStartup(["vinery:experience_effect"])],
    ["vinery:jellie_wine", niTokeysStartup(["vinery:jellie"])]
]);


// 喝监听
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", /** @type {(event: Internal.LivingEntityUseItemEvent$Finish) => void} */ event =>
{
    // 物品
    const item = event.getItem();

    // 空物品
    if (item.isEmpty()) return;

    // 资源
    const itemLocation = item.getIdLocation();
    const id = nToiStartup(itemLocation.getNamespace(), itemLocation.getPath());
    const player = event.getEntity();

    // 是否是表中物品
    if (!vinery_drinks_duration_tables.has(id)) return;
    // 只对玩家生效
    if (!player || !player.isPlayer() || !player.isAlive()) return;

    // 去重操作
    const uuid = player.uuid + "";
    const curTime = player.getLevel().getTime();
    const lastTime = vinery_drinks_diff_tables.get(uuid);
    const diffTime = curTime - lastTime;

    // 重复，跳过
    if (lastTime && diffTime < vinery_drinks_diff_max_tick)
    {
        // debug ==========
        // console.log("LivingEntityUseItemEvent SKIP:");
        // console.log("id: " + id);
        // console.log("uuid: " + uuid);
        // console.log("curTime: " + curTime);
        // console.log("lastTime: " + lastTime);
        // console.log("diffTime: " + diffTime);
        // console.log("vinery_drinks_diff_tables:");
        // vinery_drinks_diff_tables.forEach((v, k) => console.log(`${k}=${v}`));
        // console.log("==============================");
        // debug ==========

        return;
    }

    // 更新时间戳
    vinery_drinks_diff_tables.set(uuid, curTime);

    // debug ==========
    // console.log("LivingEntityUseItemEvent RUN:");
    // console.log("id: " + id);
    // console.log("uuid: " + uuid);
    // console.log("curTime: " + curTime);
    // console.log("lastTime: " + lastTime);
    // console.log("diffTime: " + diffTime);
    // console.log("vinery_drinks_diff_tables:");
    // vinery_drinks_diff_tables.forEach((v, k) => console.log(`${k}=${v}`));
    // console.log("==============================");
    // debug ==========

    // 取出要忽略的效果集合
    const ignore = vinery_drinks_duration_tables.get(id);

    // 增加已有的正面效果的等级
    player.getActiveEffectsMap().forEach((effect, effectId) =>
    {
        // 正面效果
        if (!effect.isBeneficial()) return;

        // 转为效果字符串
        const effectKey = effect.getDescriptionId() + "";

        // 全局忽略
        if (vinery_drinks_duration_global_tables.has(effectKey)) return;
        // 跳过酒自身提供的效果
        if (ignore && ignore.has(effectKey)) return;

        // 当前时长
        const curDuration = effectId.getDuration();
        // 下一时长
        const nextDuration = Math.min(curDuration + vinery_drinks_duration_base_tick, vinery_drinks_duration_max_tick);

        // 大于
        if (nextDuration > curDuration && nextDuration > 0)
        {
            // 追加时长
            player.potionEffects.add(effect, nextDuration, effectId.getAmplifier());
        }
    });
});
