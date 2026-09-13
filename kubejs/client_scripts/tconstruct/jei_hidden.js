// 工具
ItemEvents.tooltip(event =>
{
    event.add([
        // 小型工具
        "tconstruct:sword",
        "tconstruct:dagger",
        "tconstruct:pickaxe",
        "tconstruct:hand_axe",
        "tconstruct:pickadze",
        "tconstruct:mattock",
        "tconstruct:kama",
        "tconstruct:crossbow",
        "tconstruct:fishing_rod",
        "tconstruct:arrow",
        "tconstruct:shuriken",
        "tconstruct:throwing_axe",
        // 宽型工具
        "tconstruct:cleaver",
        "tconstruct:sledge_hammer",
        "tconstruct:vein_hammer",
        "tconstruct:broad_axe",
        "tconstruct:excavator",
        "tconstruct:scythe",
        "tconstruct:longbow",
        "tconstruct:javelin",
        // 远古工具
        "tconstruct:battlesign",
        "tconstruct:war_pick",
        "tconstruct:melting_pan",
        "tconstruct:swasher",
        "tconstruct:minotaur_ax1"
    ], Text.blue("匠魂制造"));
});

// 装备
ItemEvents.tooltip(event =>
{
    event.add([
        // 盾牌
        "tconstruct:travelers_shield",
        "tconstruct:plate_shield",
        // 旅行者套装 
        "tconstruct:travelers_helmet",
        "tconstruct:travelers_chestplate",
        "tconstruct:travelers_leggings",
        "tconstruct:travelers_boots",
        // 镶板套装
        "tconstruct:plate_helmet",
        "tconstruct:plate_chestplate",
        "tconstruct:plate_leggings",
        "tconstruct:plate_boots",
        // 黏液套装
        "tconstruct:slime_helmet",
        "tconstruct:slime_chestplate",
        "tconstruct:slime_leggings",
        "tconstruct:slime_boots"
    ], Text.yellow("匠魂制造"));
});
