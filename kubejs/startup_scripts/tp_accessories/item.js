StartupEvents.registry("item", event =>
{
    const _this = id => "tp_accessories:" + id;

    // 魔力戒指
    const magicRing = event.create(_this("magic_ring"), "basic");

    // 基本属性
    magicRing
        .maxStackSize(1)
        .rarity("epic")
        .tag("curios:ring");
});

StartupEvents.registry("creative_mode_tab", event =>
{
    const _this = id => "tp_accessories:" + id;

    // 注册创造物品栏，并给予创造物品栏id
    const tab = event.create(_this("items"));

    // 设置创造物品栏的图标,注意这里的物品一定要是存在的
    tab.icon(() => Item.of(_this("magic_ring")));
    // 设置创造物品栏的显示名称
    tab.displayName = Text.translatable("item_group.tp_accessories.items");
    //往物品栏里添加物品
    tab.content(() => [
        _this("magic_ring")
    ]);
});
