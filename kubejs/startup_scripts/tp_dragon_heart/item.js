/**
 * 是否携带巨龙饰品 
 * @param {Internal.SlotContext} ctx 饰品上下文
 * @param {Special.Item} item 物品 ID
 * @param {"xat:fire" | "xat:ice" | "xat:lightning"} type 巨龙类型
 * @returns {boolean}
 */
function tpDragonHeartHasDragon(ctx, item, type)
{
    let player = ctx.entity();
    let liked = player["findCurios(net.minecraft.world.item.Item)"](item).find(curio =>
    {
        // console.log(`findCurios(net.minecraft.world.item.Item <${item}>: ${curio.stack().getNbt().get("Elements")?.primary}`);
        return curio.stack().hasNBT() && curio.stack().getNbt().get("Elements")?.primary == type;
    });

    return liked;
}

StartupEvents.registry("item", event =>
{
    const _this = id => "tp_dragon_heart:" + id;
    const _xat = id => "xat:" + id;
    const _ice = id => "iceandfire:" + id;
    const _dret = id => "dreadsteel:" + id;
    const _idb = id => "if_dragon_blessings:" + id;

    // 龙心
    const heartFire = event.create(_this("dragons_heart_fire"), "basic");
    const heartIce = event.create(_this("dragons_heart_ice"), "basic");
    const heartLightning = event.create(_this("dragons_heart_lightning"), "basic");

    // 饰品能力
    const fireCapability = CuriosJSCapabilityBuilder.create();
    const iceCapability = CuriosJSCapabilityBuilder.create();
    const lightningCapability = CuriosJSCapabilityBuilder.create();

    // 饰品能力效果
    const fireEffect = _idb("fire_attack");
    const iceEffect = _idb("ice_attack");
    const lightningEffect = _idb("lightning_attack");

    // 联动巨龙饰品
    const dragons = { eye: _xat("dragons_eye"), ring: _xat("dragon_ring") };

    // 单独联动盔甲
    const fireArmors = [
        _ice("dragonsteel_fire_helmet"),
        _ice("dragonsteel_fire_chestplate"),
        _ice("dragonsteel_fire_leggings"),
        _ice("dragonsteel_fire_boots")
    ];
    const iceArmors = [
        _ice("dragonsteel_ice_helmet"),
        _ice("dragonsteel_ice_chestplate"),
        _ice("dragonsteel_ice_leggings"),
        _ice("dragonsteel_ice_boots")
    ];
    const lightningArmors = [
        _ice("dragonsteel_lightning_helmet"),
        _ice("dragonsteel_lightning_chestplate"),
        _ice("dragonsteel_lightning_leggings"),
        _ice("dragonsteel_lightning_boots")
    ];
    // 全局联动盔甲
    const dreadsteelArmors = [
        _dret("dreadsteel_helmet"),
        _dret("dreadsteel_chestplate"),
        _dret("dreadsteel_leggings"),
        _dret("dreadsteel_boots")
    ];

    // 基本参数设置
    heartFire
        .maxStackSize(1)
        .rarity("epic")
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_fire.text1"))
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_fire.text2").yellow())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_fire.text3").gold())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_fire.text4").gold())
        .tag("curios:charm");

    heartIce
        .maxStackSize(1)
        .rarity("epic")
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_ice.text1"))
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_ice.text2").blue())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_ice.text3").gold())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_ice.text4").gold())
        .tag("curios:charm");

    heartLightning
        .maxStackSize(1)
        .rarity("epic")
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_lightning.text1"))
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_lightning.text2").lightPurple())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_lightning.text3").red())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_lightning.text4").gold())
        .tooltip(Text.translatable("tooltip.tp_dragon_heart.dragons_heart_lightning.text5").gold())
        .tag("curios:charm");

    // 设置能力
    // 火龙饰品
    fireCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            let level = 0;
            let player = slotContext.entity();

            // 巨龙之眼、巨戒指：火属性
            if (tpDragonHeartHasDragon(slotContext, dragons.eye, "xat:fire") || tpDragonHeartHasDragon(slotContext, dragons.ring, "xat:fire")) level++;
            // 盔甲
            if (wearsArmor(player, fireArmors) || wearsArmor(player, dreadsteelArmors)) level++;

            // 应用效果
            applyEffectLevel(player, fireEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(fireEffect));

    // 冰龙饰品
    iceCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            let level = 0;
            let player = slotContext.entity();

            // 巨龙之眼、巨戒指：冰属性
            if (tpDragonHeartHasDragon(slotContext, dragons.eye, "xat:ice") || tpDragonHeartHasDragon(slotContext, dragons.ring, "xat:ice")) level++;
            // 盔甲
            if (wearsArmor(player, iceArmors) || wearsArmor(player, dreadsteelArmors)) level++;

            // 应用效果
            applyEffectLevel(player, iceEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(iceEffect));

    // 电龙饰品
    lightningCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            let level = 0;
            let player = slotContext.entity();

            // 巨龙之眼、巨戒指：电属性
            if (tpDragonHeartHasDragon(slotContext, dragons.eye, "xat:lightning") || tpDragonHeartHasDragon(slotContext, dragons.ring, "xat:lightning")) level++;
            // 盔甲
            if (wearsArmor(player, lightningArmors) || wearsArmor(player, dreadsteelArmors)) level++;

            // 应用效果
            applyEffectLevel(player, lightningEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(lightningEffect));

    // 应用能力
    heartFire.attachCuriosCapability(fireCapability);
    heartIce.attachCuriosCapability(iceCapability);
    heartLightning.attachCuriosCapability(lightningCapability);
});

StartupEvents.registry("creative_mode_tab", event =>
{
    const _this = id => "tp_dragon_heart:" + id;

    // 注册创造物品栏，并给予创造物品栏id
    const tab = event.create(_this("items"));

    // 设置创造物品栏的图标,注意这里的物品一定要是存在的
    tab.icon(() => Item.of(_this("dragons_heart_lightning")));
    // 设置创造物品栏的显示名称
    tab.displayName = Text.translatable("item_group.tp_dragon_heart.items");
    //往物品栏里添加物品
    tab.content(() => [
        // 火龙之心
        _this("dragons_heart_fire"),
        // 冰龙之心
        _this("dragons_heart_ice"),
        // 电龙之心
        _this("dragons_heart_lightning"),
    ]);
});
