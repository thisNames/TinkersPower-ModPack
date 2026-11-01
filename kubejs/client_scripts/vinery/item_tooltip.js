ItemEvents.tooltip(event =>
{
    // 葡萄酒
    ["vinery:mead",
        "vinery:apple_cider",
        "vinery:apple_wine",
        "vinery:mellohi_wine",
        "vinery:glowing_wine",
        "vinery:solaris_wine",
        "vinery:noir_wine",
        "vinery:red_wine",
        "vinery:strad_wine",
        "vinery:cherry_wine",
        "vinery:cristel_wine",
        "vinery:creepers_crush",
        "vinery:kelp_cider",
        "vinery:lilitu_wine",
        "vinery:jo_special_mixture",
        "vinery:eiswein",
        "vinery:aegis_wine",
        "vinery:bolvar_wine",
        "vinery:chorus_wine",
        "vinery:villagers_fright",
        "vinery:clark_wine",
        "vinery:magnetic_wine",
        "vinery:stal_wine",
        "vinery:chenet_wine",
        "vinery:bottle_mojang_noir",
        "vinery:jellie_wine"
    ].forEach(wine =>
    {
        event.add(wine, Text.translatable("item.kubejs.tooltip.vinery.wine_text1").lightPurple());
        event.add(wine, Text.translatable("item.kubejs.tooltip.vinery.wine_text2").lightPurple());
    });
});
