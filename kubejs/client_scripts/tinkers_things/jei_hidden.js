// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();

    event.add([
        "tinkers_things:shovel",
        "tinkers_things:halberd",
        "tinkers_things:shortbow",
        "tinkers_things:blockram",
        "tinkers_things:amethyst_staff"
    ], text);
});


// 装备
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").yellow();

    event.add([
        // 盾牌
        "tinkers_things:laminar_shield",
        // 层板套装
        "tinkers_things:laminar_helmet",
        "tinkers_things:laminar_chestplate",
        "tinkers_things:laminar_leggings",
        "tinkers_things:laminar_boots"
    ], text);
});
