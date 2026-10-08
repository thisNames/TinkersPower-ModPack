// 工具
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
        // 小型工具
        "tconstruct:sword",
        "tconstruct:dagger",
        "tconstruct:pickaxe",
        "tconstruct:hand_axe",
        "tconstruct:pickadze",
        "tconstruct:mattock",
        "tconstruct:kama",
        "tconstruct:fishing_rod",
        // 宽型工具
        "tconstruct:cleaver",
        "tconstruct:sledge_hammer",
        "tconstruct:vein_hammer",
        "tconstruct:broad_axe",
        "tconstruct:excavator",
        "tconstruct:scythe",
        "tconstruct:javelin",
        // 远古工具
        "tconstruct:battlesign",
        "tconstruct:melting_pan",
        "tconstruct:swasher",
        "tconstruct:minotaur_axe",
        // 远程
        "tconstruct:crossbow",
        "tconstruct:shuriken",
        "tconstruct:throwing_axe",
        "tconstruct:longbow",
        "tconstruct:war_pick",
        // 非武器工具
        "tconstruct:arrow"
    ]);
});

// 装备
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
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
    ]);
});
