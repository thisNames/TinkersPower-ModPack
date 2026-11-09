ServerEvents.recipes(event =>
{
    const _this = id => "ba_bt:" + id;
    const _mc = id => "minecraft:" + id;
    const _tide = id => "tide:" + id;
    const _ice = id => "iceandfire:" + id;
    const _tcons = id => "tconstruct:" + id;
    const _deeper = id => "deeperdarker:" + id;

    // 大地石碑之键
    event.shaped(_this("land_monolith_key"), [
        [_this("land_golem_eye"), "", ""],
        ["", _mc("iron_ingot"), ""],
        ["", "", _mc("iron_ingot")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("land_monolith_key"), count: 2 }, [
        [_mc("iron_ingot"), _mc("stone_bricks"), _mc("iron_ingot")],
        [_mc("stone_bricks"), _this("land_resonance_stone"), _mc("stone_bricks")],
        [_mc("iron_ingot"), _mc("stone_bricks"), _mc("iron_ingot")]
    ]);

    // 海洋石碑之键
    event.shaped(_this("ocean_monolith_key"), [
        [_this("ocean_golem_eye"), "", ""],
        ["", _mc("prismarine_crystals"), ""],
        ["", "", _mc("prismarine_crystals")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("ocean_monolith_key"), count: 2 }, [
        [_mc("prismarine_crystals"), _mc("prismarine_bricks"), _mc("prismarine_crystals")],
        [_mc("prismarine_bricks"), _this("ocean_resonance_stone"), _mc("prismarine_bricks")],
        [_mc("prismarine_crystals"), _mc("prismarine_bricks"), _mc("prismarine_crystals")]
    ]);

    // 炉心石碑之键
    event.shaped(_this("core_monolith_key"), [
        [_this("core_golem_eye"), "", ""],
        ["", _mc("blaze_rod"), ""],
        ["", "", _mc("blaze_rod")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("core_monolith_key"), count: 2 }, [
        [_mc("blaze_rod"), _mc("magma_block"), _mc("blaze_rod")],
        [_mc("magma_block"), _this("core_resonance_stone"), _mc("magma_block")],
        [_mc("blaze_rod"), _mc("magma_block"), _mc("blaze_rod")]
    ]);

    // 下界石碑之键
    event.shaped(_this("nether_monolith_key"), [
        [_this("nether_golem_eye"), "", ""],
        ["", _mc("quartz"), ""],
        ["", "", _mc("quartz")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("nether_monolith_key"), count: 2 }, [
        [_mc("quartz"), _mc("red_nether_bricks"), _mc("quartz")],
        [_mc("red_nether_bricks"), _this("nether_resonance_stone"), _mc("red_nether_bricks")],
        [_mc("quartz"), _mc("red_nether_bricks"), _mc("quartz")]
    ]);

    // 末影石碑之键
    event.shaped(_this("end_monolith_key"), [
        [_this("end_golem_eye"), "", ""],
        ["", _mc("amethyst_shard"), ""],
        ["", "", _mc("amethyst_shard")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("end_monolith_key"), count: 2 }, [
        [_mc("amethyst_shard"), _tide("pearl_bobber"), _mc("amethyst_shard")],
        [_tide("pearl_bobber"), _this("end_resonance_stone"), _tide("pearl_bobber")],
        [_mc("amethyst_shard"), _tide("pearl_bobber"), _mc("amethyst_shard")]
    ]);

    // 天域石碑之键
    event.shaped(_this("sky_monolith_key"), [
        [_this("sky_golem_eye"), "", ""],
        ["", _ice("silver_ingot"), ""],
        ["", "", _ice("silver_ingot")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("sky_monolith_key"), count: 2 }, [
        [_ice("silver_ingot"), _tcons("rose_gold_ingot"), _ice("silver_ingot")],
        [_tcons("rose_gold_ingot"), _this("sky_resonance_stone"), _tcons("rose_gold_ingot")],
        [_ice("silver_ingot"), _tcons("rose_gold_ingot"), _ice("silver_ingot")]
    ]);

    // 古城共鸣石
    event.recipes.kubejs.shaped({ item: _this("city_resonance_stone"), count: 6 }, [
        [_this("land_resonance_stone"), _this("ocean_resonance_stone"), _this("core_resonance_stone")],
        [_mc("echo_shard"), _deeper("reinforced_echo_shard"), _mc("echo_shard")],
        [_this("nether_resonance_stone"), _this("end_resonance_stone"), _this("sky_resonance_stone")]
    ]);
});
