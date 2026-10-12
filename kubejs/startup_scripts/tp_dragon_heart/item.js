StartupEvents.registry("item", event =>
{
    const _this = id => "tp_dragon_heart:" + id;

    // 火龙之心
    event.create(_this("dragons_heart_fire"), "basic")
        .maxStackSize(1)
        .rarity("epic")
        .tag("curios:charm");

    // 冰龙之心
    event.create(_this("dragons_heart_ice"), "basic")
        .maxStackSize(1)
        .rarity("epic")
        .tag("curios:charm");

    // 电龙之心
    event.create(_this("dragons_heart_lightning"), "basic")
        .maxStackSize(1)
        .rarity("epic")
        .tag("curios:charm");
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
