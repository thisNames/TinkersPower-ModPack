ServerEvents.recipes(event =>
{
    const _this = id => "trinketsandbaubles:" + id;
    const _aquamirae = id => "aquamirae:" + id;
    const _minecraft = id => "minecraft:" + id;
    const _iceandfire = id => "iceandfire:" + id;
    const _bountifulbaubles = id => "bountifulbaubles:" + id;
    const _cataclysm = id => "cataclysm:" + id;
    const _twilightforest = id => "twilightforest:" + id;
    const _alexscaves = id => "alexscaves:" + id;
    const _potionrings2 = id => "potionrings2:" + id;
    const _bfbosses = id => "block_factorys_bosses:" + id;

    event.remove({
        output: [
            // curios
            _this("weightless_stone"),
            _this("inertia_null_stone"),
            _this("greater_inertia_stone"),
            _this("sea_stone"),
            _this("poison_stone"),
            _this("damage_shield"),
            _this("wither_ring"),
            _this("dragons_eye_ice"),
            _this("dragons_eye_fire"),
            _this("dragons_eye_lightning"),
            _this("dragons_eye"),
            // transform foods
            _this("fairy_dew"),
            _this("dwarf_stout"),
            _this("titan_spirit"),
            _this("goblin_soup"),
            _this("elf_sap"),
            _this("faelis_food"),
            _this("dragon_gem"),
            // transform rings
            _this("fairies_ring"),
            _this("dwarves_ring"),
            _this("titan_ring"),
            _this("goblins_ring"),
            _this("elves_ring"),
            _this("faelis_ring"),
            _this("dragons_ring")
        ]
    });

    // curios
    event.shaped(_this("sea_stone"), [
        [_aquamirae("ship_graveyard_echo"), _minecraft("chain"), _aquamirae("ship_graveyard_echo")],
        [_this("glowing_ingot"), _minecraft("heart_of_the_sea"), _this("glowing_ingot")],
        [_aquamirae("ship_graveyard_echo"), _this("glowing_ingot"), _aquamirae("ship_graveyard_echo")]
    ]);

    event.shaped(_this("poison_stone"), [
        [_iceandfire("hydra_fang"), _this("glowing_ingot"), _iceandfire("hydra_fang")],
        [_this("glowing_ingot"), _bountifulbaubles("bezoar"), _this("glowing_ingot")],
        [_iceandfire("hydra_fang"), _this("glowing_ingot"), _iceandfire("hydra_fang")]
    ]);

    [
        _iceandfire("dragonegg_red"),
        _iceandfire("dragonegg_green"),
        _iceandfire("dragonegg_bronze"),
        _iceandfire("dragonegg_gray"),
        _iceandfire("dragonegg_blue"),
        _iceandfire("dragonegg_white"),
        _iceandfire("dragonegg_sapphire"),
        _iceandfire("dragonegg_silver"),
        _iceandfire("dragonegg_black"),
        _iceandfire("dragonegg_electric"),
        _iceandfire("dragonegg_amythest"),
        _iceandfire("dragonegg_copper"),
        _minecraft("dragon_egg")
    ].forEach(egg =>
    {
        event.shaped(_this("damage_shield"), [
            [_this("glowing_gem"), _cataclysm("ignitium_ingot"), _this("glowing_gem")],
            [_cataclysm("ignitium_ingot"), egg, _cataclysm("ignitium_ingot")],
            [_this("glowing_gem"), _cataclysm("ignitium_ingot"), _this("glowing_gem")]
        ]);
    });

    event.shaped(_this("wither_ring"), [
        [_this("glowing_ingot"), _minecraft("wither_skeleton_skull"), _this("glowing_ingot")],
        [_minecraft("wither_skeleton_skull"), _minecraft("nether_star"), _minecraft("wither_skeleton_skull")],
        [_this("glowing_ingot"), _minecraft("wither_skeleton_skull"), _this("glowing_ingot")]
    ]);

    event.shaped(_this("dragons_eye_ice"), [
        [_this("glow_ring"), _cataclysm("abyss_eye"), _this("glowing_gem")],
        [_iceandfire("ice_dragon_blood"), Item.of(_iceandfire("dragon_skull_ice"), "{DragonAge:75,Stage:5}").weakNBT(), _iceandfire("ice_dragon_blood")],
        [_this("glowing_gem"), _iceandfire("ice_dragon_blood"), _this("glowing_gem")]
    ]);

    event.shaped(_this("dragons_eye_fire"), [
        [_this("glow_ring"), _cataclysm("flame_eye"), _this("glowing_gem")],
        [_iceandfire("fire_dragon_blood"), Item.of(_iceandfire("dragon_skull_fire"), "{DragonAge:75,Stage:5}").weakNBT(), _iceandfire("fire_dragon_blood")],
        [_this("glowing_gem"), _iceandfire("fire_dragon_blood"), _this("glowing_gem")]
    ]);

    event.shaped(_this("dragons_eye_lightning"), [
        [_this("glow_ring"), _cataclysm("storm_eye"), _this("glowing_gem")],
        [_iceandfire("lightning_dragon_blood"), Item.of(_iceandfire("dragon_skull_lightning"), "{DragonAge:75,Stage:5}").weakNBT(), _iceandfire("lightning_dragon_blood")],
        [_this("glowing_gem"), _iceandfire("lightning_dragon_blood"), _this("glowing_gem")]
    ]);

    // transform foods
    event.shaped(_this("fairy_dew"), [
        [_this("glowing_powder"), _cataclysm("lacrima"), _this("glowing_powder")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("glowing_powder"), _iceandfire("siren_tear"), _this("glowing_powder")]
    ]);

    event.shaped(_this("dwarf_stout"), [
        [_this("glowing_ingot"), _twilightforest("mazebreaker_pickaxe"), _this("glowing_ingot")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("glowing_ingot"), _twilightforest("meef_stroganoff"), _this("glowing_ingot")]
    ]);

    event.shaped(_this("titan_spirit"), [
        [_this("glowing_gem"), _iceandfire("cyclops_eye"), _this("glowing_gem")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("glowing_gem"), _alexscaves("giant_sweetberry"), _this("glowing_gem")]
    ]);

    event.shaped(_this("goblin_soup"), [
        [_twilightforest("magic_beans"), _this("mana_candy"), _twilightforest("magic_beans")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("glowing_powder"), _twilightforest("cooked_venison"), _this("glowing_powder")]
    ]);

    event.shaped(_this("elf_sap"), [
        [_this("mana_candy"), _twilightforest("twilight_oak_sapling"), _this("mana_candy")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("mana_candy"), _twilightforest("fiery_tears"), _this("mana_candy")]
    ]);

    event.shaped(_this("faelis_food"), [
        [_this("mana_candy"), _iceandfire("stymphalian_feather_bundle"), _this("mana_candy")],
        [_minecraft("dragon_breath"), _this("mana_crystal"), _minecraft("dragon_breath")],
        [_this("mana_candy"), _minecraft("blue_orchid"), _this("mana_candy")]
    ]);

    event.shaped(_this("dragon_gem"), [
        [_alexscaves("tectonic_shard"), _this("dragons_eye_fire"), _alexscaves("tectonic_shard")],
        [_minecraft("dragon_breath"), _this("moon_rose"), _minecraft("dragon_breath")],
        [_twilightforest("hydra_chop"), _twilightforest("fiery_blood"), _twilightforest("hydra_chop")]
    ]);

    // transform rings
    event.shaped(_this("fairies_ring"), [
        [_this("fairy_dew"), _this("glowing_ingot"), _iceandfire("sapphire_gem")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _iceandfire("sapphire_gem")],
        [_iceandfire("sapphire_gem"), _iceandfire("sapphire_gem"), _alexscaves("azure_neodymium_ingot")]
    ]);

    event.shaped(_this("dwarves_ring"), [
        [_alexscaves("scarlet_neodymium_ingot"), _this("glowing_ingot"), _twilightforest("fiery_ingot")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _twilightforest("fiery_ingot")],
        [_twilightforest("fiery_ingot"), _twilightforest("fiery_ingot"), _this("dwarf_stout")]
    ]);

    event.shaped(_this("titan_ring"), [
        [_this("titan_spirit"), _this("glowing_ingot"), _cataclysm("black_steel_ingot")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _cataclysm("witherite_ingot")],
        [_cataclysm("black_steel_ingot"), _cataclysm("witherite_ingot"), _cataclysm("witherite_ingot")]
    ]);

    event.shaped(_this("goblins_ring"), [
        [_this("goblin_soup"), _this("glowing_ingot"), _twilightforest("knightmetal_ingot")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _twilightforest("ironwood_ingot")],
        [_twilightforest("knightmetal_ingot"), _twilightforest("ironwood_ingot"), _twilightforest("ironwood_ingot")]
    ]);

    event.shaped(_this("elves_ring"), [
        [_this("elf_sap"), _this("glowing_ingot"), _cataclysm("essence_of_the_storm")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _cataclysm("cursium_ingot")],
        [_cataclysm("essence_of_the_storm"), _cataclysm("cursium_ingot"), _twilightforest("seeker_bow")]
    ]);

    event.shaped(_this("faelis_ring"), [
        [_this("faelis_food"), _this("glowing_ingot"), _cataclysm("ancient_metal_ingot")],
        [_this("glowing_ingot"), _potionrings2("potion_ring"), _cataclysm("ancient_metal_ingot")],
        [_cataclysm("ancient_metal_ingot"), _cataclysm("ancient_metal_ingot"), _this("faelis_claw")]
    ]);

    event.shaped(_this("dragons_ring"), [
        [_bfbosses("dragon_skull"), _this("glowing_ingot"), _bfbosses("dragon_bone")],
        [_this("dragon_gem"), _potionrings2("potion_ring"), _bfbosses("dragon_bone")],
        [_bfbosses("dragon_bone"), _bfbosses("dragon_bone"), _iceandfire("fire_dragon_heart")]
    ]);
});
