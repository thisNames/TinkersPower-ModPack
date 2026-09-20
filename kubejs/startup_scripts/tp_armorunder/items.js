StartupEvents.registry("item", event =>
{
    const _this = id => "tp_armorunder:" + id;

    // 奥兹内衬
    event.create(_this("auto_helmet_liner"), "basic");
    event.create(_this("auto_chestplate_liner"), "basic");
    event.create(_this("auto_leggings_liner"), "basic");
    event.create(_this("auto_boots_liner"), "basic");

    // 保温内衬
    event.create(_this("beekeeper_helmet_liner"), "basic");
    event.create(_this("beekeeper_chestplate_liner"), "basic");
    event.create(_this("beekeeper_leggings_liner"), "basic");
    event.create(_this("beekeeper_boots_liner"), "basic");

    // 降温内衬
    event.create(_this("cool_helmet_liner"), "basic");
    event.create(_this("cool_chestplate_liner"), "basic");
    event.create(_this("cool_leggings_liner"), "basic");
    event.create(_this("cool_boots_liner"), "basic");

    // 加热凝胶
    event.create(_this("heating_goo"), "basic");
    // 加热丝线
    event.create(_this("warm_liner_material"), "basic");

    // 降温凝胶
    event.create(_this("cooling_goo"), "basic");
    // 降温丝线
    event.create(_this("cool_liner_material"), "basic");

    // 奥兹丝线
    event.create(_this("flipflop_liner_material"), "basic");
    // 寒冰粉
    event.create(_this("freeze_powder"), "basic");
    // 内衬剪
    event.create(_this("liner_snips"), "basic");
});

StartupEvents.registry("creative_mode_tab", event =>
{
    const _this = id => "tp_armorunder:" + id;

    // 注册创造物品栏，并给予创造物品栏id
    const tab = event.create(_this("items"));

    // 设置创造物品栏的图标,注意这里的物品一定要是存在的
    tab.icon(() => Item.of(_this("auto_chestplate_liner")));
    // 设置创造物品栏的显示名称
    tab.displayName = Text.translatable("item_group.tp_armorunder.items");
    //往物品栏里添加物品
    tab.content(() => [
        // 奥兹内衬
        _this("auto_helmet_liner"),
        _this("auto_chestplate_liner"),
        _this("auto_leggings_liner"),
        _this("auto_boots_liner"),
        // 保温内衬
        _this("beekeeper_helmet_liner"),
        _this("beekeeper_chestplate_liner"),
        _this("beekeeper_leggings_liner"),
        _this("beekeeper_boots_liner"),
        // 降温内衬
        _this("cool_helmet_liner"),
        _this("cool_chestplate_liner"),
        _this("cool_leggings_liner"),
        _this("cool_boots_liner"),
        // 加热凝胶
        _this("heating_goo"),
        // 加热丝线
        _this("warm_liner_material"),
        // 降温凝胶
        _this("cooling_goo"),
        // 降温丝线
        _this("cool_liner_material"),
        // 奥兹丝线
        _this("flipflop_liner_material"),
        // 寒冰粉
        _this("freeze_powder"),
        // 内衬剪
        _this("liner_snips")
    ]);
});
