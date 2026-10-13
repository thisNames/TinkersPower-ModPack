StartupEvents.registry("item", event =>
{
    const _this = id => "tp_dragon_heart:" + id;
    const _tinket = id => "trinketsandbaubles:" + id;
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

    // 联动饰品
    const fireEye = _tinket("dragons_eye_fire");
    const iceEye = _tinket("dragons_eye_ice");
    const lightningEye = _tinket("dragons_eye_lightning");

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
    fireCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            const player = slotContext.entity();
            let level = 0;

            if (player.isCuriosEquipped(fireEye)) level++;
            if (wearsArmor(player, fireArmors) || wearsArmor(player, dreadsteelArmors)) level++;

            applyEffectLevel(player, fireEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(fireEffect));

    iceCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            const player = slotContext.entity();
            let level = 0;

            if (player.isCuriosEquipped(iceEye)) level++;
            if (wearsArmor(player, iceArmors) || wearsArmor(player, dreadsteelArmors)) level++;

            applyEffectLevel(player, iceEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(iceEffect));

    lightningCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            const player = slotContext.entity();
            let level = 0;

            if (player.isCuriosEquipped(lightningEye)) level++;
            if (wearsArmor(player, lightningArmors) || wearsArmor(player, dreadsteelArmors)) level++;

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
