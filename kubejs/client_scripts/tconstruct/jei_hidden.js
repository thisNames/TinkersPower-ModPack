// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();

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
        "tconstruct:minotaur_axe"
    ], text);
});

// 装备
ItemEvents.tooltip(event =>
{  
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").yellow();

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
    ], text);
});
