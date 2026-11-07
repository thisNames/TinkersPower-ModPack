StartupEvents.registry("item", event =>
{
    const _this = id => "inqui:" + id;

    // 腐梦时钟：一阶（腐梦浮原）
    event.create(_this("bacterium_clock_dream"), "basic")
        .maxStackSize(1)
        .rarity("rare");

    // 菌庭时钟：二阶（终焉菌庭）
    event.create(_this("bacterium_clock_finalitas"), "basic")
        .maxStackSize(1)
        .rarity("epic");
});

StartupEvents.registry("creative_mode_tab", event =>
{
    const _this = id => "inqui:" + id;

    // 注册创造物品栏，并给予创造物品栏id
    const tab = event.create(_this("items"));

    // 设置创造物品栏的图标,注意这里的物品一定要是存在的
    tab.icon(() => Item.of(_this("bacterium_clock_finalitas")));
    // 设置创造物品栏的显示名称
    tab.displayName = Text.translatable("item_group.inqui.items");
    //往物品栏里添加物品
    tab.content(() => [
        // 腐梦时钟：一阶（腐梦浮原）
        _this("bacterium_clock_dream"),
        // 菌庭时钟：二阶（终焉菌庭）
        _this("bacterium_clock_finalitas"),
    ]);
});
