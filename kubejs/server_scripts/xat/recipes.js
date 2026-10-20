ServerEvents.recipes(event =>
{
    const _this = id => "xat:" + id;
    const _aqu = id => "aquamirae:" + id;
    const _mc = id => "minecraft:" + id;
    const _ice = id => "iceandfire:" + id;
    const _bout = id => "bountifulbaubles:" + id;
    const _cata = id => "cataclysm:" + id;
    const _twil = id => "twilightforest:" + id;
    const _alexsc = id => "alexscaves:" + id;
    const _fboss = id => "block_factorys_bosses:" + id;
    const _tingenuity = id => "tinkers_ingenuity:" + id;
    const _vinery = id => "vinery:" + id;
    const _biom = id => "biomeswevegone:" + id;
    const _tp_acc = id => "tp_accessories:" + id;
    const _create = id => "create:" + id;
    const _gra = id => "graveyard:" + id;

    // 旧的
    event.remove({
        output: [
            // 材料
            _this("spark_powder"),

            // 种族食物
            _this("dwarf_stout"),
            _this("elf_sap"),
            _this("faelis_food"),
            _this("fairy_dew"),
            _this("goblin_soup"),
            _this("titan_spirit"),
            _this("taurus_tea"),

            // 种族戒指
            _this("fairy_ring"),
            _this("dwarf_ring"),
            _this("faelis_ring"),
            _this("taurus_ring"),
            _this("elf_ring"),
            _this("titan_ring"),
            _this("goblin_ring"),

            // 饰品
            _this("weightless_stone"),
            _this("inertia_null_stone"),
            _this("greater_inertia_stone"),
            _this("sea_stone"),
            _this("wither_ring"),
            _this("poison_stone"),
            _this("damage_shield"),
            _this("teddy_bear"),
            _this("polarized_stone")
        ]
    });

    [
        // 巨龙宝石
        "xat:dragon_food",
        "xat:dragon_food_fire",
        "xat:dragon_food_ice",
        "xat:dragon_food_lightning",
        // 巨龙之戒
        "xat:dragon_ring",
        "xat:dragon_ring_fire",
        "xat:dragon_ring_ice",
        "xat:dragon_ring_lightning",
        // 巨龙之眼
        "xat:dragons_eye",
        "xat:dragon_eye_inf_to_fire",
        "xat:dragon_eye_inf_to_ice",
        "xat:dragon_eye_inf_to_lightning",
        "xat:dragons_eye_inf_fire",
        "xat:dragons_eye_inf_ice",
        "xat:dragons_eye_inf_lightning",
        // 魔法食物 
        "xat:restoration_serum"
    ].forEach(item => event.remove({ id: item }));

    // 新的
    // 材料
    event.replaceInput({ output: _this("glowing_ingot") }, _mc("iron_ingot"), _ice("silver_ingot"));

    event.shaped({ item: _this("spark_powder"), count: 4 }, [
        [_this("glowing_powder"), _bout("spectral_silt"), _this("glowing_powder")],
        [_bout("spectral_silt"), _this("mana_reagent"), _bout("spectral_silt")],
        [_this("glowing_powder"), _bout("spectral_silt"), _this("glowing_powder")]
    ]);

    // 种族食物
    event.shaped(_this("dwarf_stout"), [
        [_this("glowing_ingot"), _twil("mazebreaker_pickaxe"), _this("glowing_ingot")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_this("glowing_ingot"), _vinery("mead"), _this("glowing_ingot")]
    ]);

    event.shaped(_this("elf_sap"), [
        [_this("mana_candy"), _twil("rainbow_oak_sapling"), _this("mana_candy")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_this("mana_candy"), _twil("fiery_tears"), _this("mana_candy")]
    ]);

    event.shaped(_this("faelis_food"), [
        [_this("mana_candy"), _this("faelis_claw"), _this("mana_candy")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_this("mana_candy"), _mc("blue_orchid"), _this("mana_candy")]
    ]);

    event.shaped(_this("fairy_dew"), [
        [_this("glowing_powder"), _cata("lacrima"), _this("glowing_powder")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_this("glowing_powder"), _biom("blue_enchanted_sapling"), _this("glowing_powder")]
    ]);

    event.shaped(_this("goblin_soup"), [
        [_twil("naga_scale"), _this("mana_candy"), _twil("naga_scale")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_this("glowing_powder"), _twil("cooked_venison"), _this("glowing_powder")]
    ]);

    event.shaped(_this("titan_spirit"), [
        [_this("glowing_gem"), _ice("cyclops_eye"), _this("glowing_gem")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_twil("magic_beans"), _alexsc("giant_sweetberry"), _twil("magic_beans")]
    ]);

    event.shaped(_this("taurus_tea"), [
        [_twil("steeleaf_ingot"), _twil("minoshroom_trophy"), _twil("steeleaf_ingot")],
        [_mc("dragon_breath"), _this("mana_crystal"), _mc("dragon_breath")],
        [_twil("meef_stroganoff"), _twil("diamond_minotaur_axe"), _twil("meef_stroganoff")]
    ]);

    // 巨龙宝石
    event.shaped(Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:neutral\"}}"), [
        [_bout("black_dragon_scale"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:neutral\"}}").weakNBT(), _bout("black_dragon_scale")],
        [_mc("dragon_breath"), _this("moon_rose"), _mc("dragon_breath")],
        [_twil("hydra_chop"), _twil("fiery_tears"), _twil("hydra_chop")]
    ]);

    event.shaped(Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:fire\"}}"), [
        [_ice("fire_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:fire\"}}").weakNBT(), _ice("fire_dragon_blood")],
        [_mc("dragon_breath"), _this("moon_rose"), _mc("dragon_breath")],
        [_twil("hydra_chop"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:neutral\"}}"), _twil("hydra_chop")]
    ]);

    event.shaped(Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:ice\"}}"), [
        [_ice("ice_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:ice\"}}").weakNBT(), _ice("ice_dragon_blood")],
        [_mc("dragon_breath"), _this("moon_rose"), _mc("dragon_breath")],
        [_twil("hydra_chop"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:neutral\"}}"), _twil("hydra_chop")]
    ]);

    event.shaped(Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:lightning\"}}"), [
        [_ice("lightning_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:lightning\"}}").weakNBT(), _ice("lightning_dragon_blood")],
        [_mc("dragon_breath"), _this("moon_rose"), _mc("dragon_breath")],
        [_twil("hydra_chop"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:neutral\"}}"), _twil("hydra_chop")]
    ]);

    // 种族戒指
    event.shaped(_this("fairy_ring"), [
        [_this("fairy_dew"), _this("glowing_ingot"), _ice("sapphire_gem")],
        [_this("glowing_ingot"), _tp_acc("magic_ring"), _ice("sapphire_gem")],
        [_ice("sapphire_gem"), _ice("sapphire_gem"), _alexsc("azure_neodymium_ingot")]
    ]);

    event.shaped(_this("dwarf_ring"), [
        [_alexsc("scarlet_neodymium_ingot"), _this("glowing_ingot"), _twil("fiery_ingot")],
        [_this("glowing_ingot"), _tp_acc("magic_ring"), _twil("fiery_ingot")],
        [_twil("fiery_ingot"), _twil("fiery_ingot"), _this("dwarf_stout")]
    ]);

    event.shaped(_this("faelis_ring"), [
        [_this("faelis_food"), _this("glowing_ingot"), _cata("ancient_metal_ingot")],
        [_this("glowing_ingot"), _tp_acc("magic_ring"), _cata("ancient_metal_ingot")],
        [_cata("ancient_metal_ingot"), _cata("ancient_metal_ingot"), _create("brass_ingot")]
    ]);

    event.shaped(_this("taurus_ring"), [
        [_this("taurus_tea"), _twil("knightmetal_ingot"), _mc("netherite_ingot")],
        [_twil("knightmetal_ingot"), _tp_acc("magic_ring"), _mc("netherite_ingot")],
        [_mc("netherite_ingot"), _mc("netherite_ingot"), _tingenuity("knight_crystal_ingot")]
    ]);

    event.shaped(_this("elf_ring"), [
        [_this("elf_sap"), _ice("ghost_ingot"), _cata("essence_of_the_storm")],
        [_ice("ghost_ingot"), _tp_acc("magic_ring"), _cata("cursium_ingot")],
        [_cata("essence_of_the_storm"), _cata("cursium_ingot"), _cata("cursium_ingot")]
    ]);

    event.shaped(_this("titan_ring"), [
        [_cata("witherite_block"), _gra("dark_iron_ingot"), _cata("black_steel_ingot")],
        [_gra("dark_iron_ingot"), _tp_acc("magic_ring"), _cata("black_steel_ingot")],
        [_cata("black_steel_ingot"), _cata("black_steel_ingot"), _this("titan_spirit")]
    ]);

    event.shaped(_this("goblin_ring"), [
        [_this("goblin_soup"), _this("glowing_ingot"), _twil("knightmetal_ingot")],
        [_this("glowing_ingot"), _tp_acc("magic_ring"), _twil("ironwood_ingot")],
        [_twil("knightmetal_ingot"), _twil("ironwood_ingot"), _twil("ironwood_ingot")]
    ]);

    // 巨龙之戒
    event.shaped(Item.of(_this("dragon_ring"), "{Elements:{primary:\"xat:neutral\"}}"), [
        [_fboss("dragon_skull"), _this("glowing_gem"), _fboss("dragon_bone")],
        [_this("glowing_gem"), _tp_acc("magic_ring"), _fboss("dragon_bone")],
        [_fboss("dragon_bone"), _fboss("dragon_bone"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:neutral\"}}").weakNBT()]
    ]);

    event.shaped(Item.of(_this("dragon_ring"), "{Elements:{primary:\"xat:fire\"}}"), [
        [_fboss("dragon_skull"), _this("glowing_gem"), _fboss("dragon_bone")],
        [_this("glowing_gem"), _tp_acc("magic_ring"), _fboss("dragon_bone")],
        [_fboss("dragon_bone"), _fboss("dragon_bone"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:fire\"}}").weakNBT()]
    ]);

    event.shaped(Item.of(_this("dragon_ring"), "{Elements:{primary:\"xat:ice\"}}"), [
        [_fboss("dragon_skull"), _this("glowing_gem"), _fboss("dragon_bone")],
        [_this("glowing_gem"), _tp_acc("magic_ring"), _fboss("dragon_bone")],
        [_fboss("dragon_bone"), _fboss("dragon_bone"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:ice\"}}").weakNBT()]
    ]);

    event.shaped(Item.of(_this("dragon_ring"), "{Elements:{primary:\"xat:lightning\"}}"), [
        [_fboss("dragon_skull"), _this("glowing_gem"), _fboss("dragon_bone")],
        [_this("glowing_gem"), _tp_acc("magic_ring"), _fboss("dragon_bone")],
        [_fboss("dragon_bone"), _fboss("dragon_bone"), Item.of(_this("dragon_gem"), "{Elements:{primary:\"xat:lightning\"}}").weakNBT()]
    ]);

    // 饰品
    event.replaceInput({ id: "xat:glow_ring" }, _mc("iron_ingot"), _ice("silver_ingot"));
    event.replaceInput({ id: "xat:arcing_orb" }, _this("mana_candy"), _mc("nether_star"));
    event.replaceInput({ id: "xat:faelis_claw" }, _mc("iron_ingot"), _ice("silver_ingot"));

    event.shaped(_this("sea_stone"), [
        [_aqu("ship_graveyard_echo"), _mc("chain"), _aqu("ship_graveyard_echo")],
        [_this("glowing_ingot"), _mc("heart_of_the_sea"), _this("glowing_ingot")],
        [_aqu("ship_graveyard_echo"), _this("glowing_ingot"), _aqu("ship_graveyard_echo")]
    ]);

    event.shaped(_this("wither_ring"), [
        [_this("glowing_ingot"), _mc("wither_skeleton_skull"), _this("glowing_ingot")],
        [_mc("wither_skeleton_skull"), _mc("nether_star"), _mc("wither_skeleton_skull")],
        [_this("glowing_ingot"), _mc("wither_skeleton_skull"), _this("glowing_ingot")]
    ]);

    event.shaped(_this("poison_stone"), [
        [_ice("hydra_fang"), _this("glowing_ingot"), _ice("hydra_fang")],
        [_this("glowing_ingot"), _bout("bezoar"), _this("glowing_ingot")],
        [_ice("hydra_fang"), _this("glowing_ingot"), _ice("hydra_fang")]
    ]);

    [
        _ice("dragonegg_red"),
        _ice("dragonegg_green"),
        _ice("dragonegg_bronze"),
        _ice("dragonegg_gray"),
        _ice("dragonegg_blue"),
        _ice("dragonegg_white"),
        _ice("dragonegg_sapphire"),
        _ice("dragonegg_silver"),
        _ice("dragonegg_black"),
        _ice("dragonegg_electric"),
        _ice("dragonegg_amythest"),
        _ice("dragonegg_copper"),
        _mc("dragon_egg")
    ].forEach(egg =>
    {
        event.shaped(_this("damage_shield"), [
            [_this("glowing_gem"), _cata("ignitium_ingot"), _this("glowing_gem")],
            [_cata("ignitium_ingot"), egg, _cata("ignitium_ingot")],
            [_this("glowing_gem"), _cata("ignitium_ingot"), _this("glowing_gem")]
        ]);
    });

    event.shaped(_this("teddy_bear"), [
        [_mc("brown_wool"), _mc("brown_wool"), _mc("brown_wool")],
        [_mc("gray_wool"), _this("glowing_gem"), _mc("gray_wool")],
        [_mc("brown_wool"), _mc("brown_wool"), _mc("brown_wool")]
    ]);

    event.shaped(_this("cosmetic"), [
        [_create("cardboard"), _this("mana_crystal"), _create("cardboard")],
        [_bout("spectral_silt"), _twil("transformation_powder"), _bout("spectral_silt")],
        [_create("cardboard"), _this("mana_crystal"), _create("cardboard")]
    ]);

    event.shaped(_this("polarized_stone"), [
        [_alexsc("block_of_scarlet_neodymium"), _this("glowing_ingot"), _alexsc("block_of_azure_neodymium")],
        [_this("glowing_ingot"), _mc("redstone_block"), _this("glowing_ingot")],
        [_alexsc("block_of_scarlet_neodymium"), _this("glowing_ingot"), _alexsc("block_of_azure_neodymium")]
    ]);

    // 巨龙之眼
    event.shaped(Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:neutral\"}}"), [
        [_this("glow_ring"), _cata("void_eye"), _this("glowing_gem")],
        [_mc("dragon_breath"), _mc("dragon_head"), _mc("dragon_breath")],
        [_this("glowing_gem"), _mc("dragon_breath"), _this("glowing_gem")]
    ]);

    event.shaped(Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:fire\"}}"), [
        [_ice("fire_dragon_blood"), _cata("flame_eye"), _ice("fire_dragon_blood")],
        [_this("glowing_gem"), Item.of(_ice("dragon_skull_fire"), "{Stage:5}").weakNBT(), _this("glowing_gem")],
        [_ice("fire_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:neutral\"}}").weakNBT(), _ice("fire_dragon_blood")]
    ]);

    event.shaped(Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:ice\"}}"), [
        [_ice("ice_dragon_blood"), _cata("abyss_eye"), _ice("ice_dragon_blood")],
        [_this("glowing_gem"), Item.of(_ice("dragon_skull_ice"), "{Stage:5}").weakNBT(), _this("glowing_gem")],
        [_ice("ice_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:neutral\"}}").weakNBT(), _ice("ice_dragon_blood")]
    ]);

    event.shaped(Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:lightning\"}}"), [
        [_ice("lightning_dragon_blood"), _cata("storm_eye"), _ice("lightning_dragon_blood")],
        [_this("glowing_gem"), Item.of(_ice("dragon_skull_lightning"), "{Stage:5}").weakNBT(), _this("glowing_gem")],
        [_ice("lightning_dragon_blood"), Item.of(_this("dragons_eye"), "{Elements:{primary:\"xat:neutral\"}}").weakNBT(), _ice("lightning_dragon_blood")]
    ]);

    // 魔法食物
    event.shaped(_this("restoration_serum"), [
        [_ice("fire_dragon_blood"), _mc("nether_star"), _ice("fire_dragon_blood")],
        [_ice("ice_dragon_blood"), _this("mana_reagent"), _ice("ice_dragon_blood")],
        [_ice("lightning_dragon_blood"), _mc("dragon_breath"), _ice("lightning_dragon_blood")]
    ]);
});
