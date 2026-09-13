// 工具
ItemEvents.tooltip(event =>
{
    event.add([
        "tinkers_things:shovel",
        "tinkers_things:halberd",
        "tinkers_things:shortbow",
        "tinkers_things:blockram",
        "tinkers_things:amethyst_staff"
    ], Text.blue("匠魂制造"));
});


// 装备
ItemEvents.tooltip(event =>
{
    event.add([
        // 盾牌
        "tinkers_things:laminar_shield",
        // 层板套装
        "tinkers_things:laminar_helmet",
        "tinkers_things:laminar_chestplate",
        "tinkers_things:laminar_leggings",
        "tinkers_things:laminar_boots"
    ], Text.yellow("匠魂制造"));
});
