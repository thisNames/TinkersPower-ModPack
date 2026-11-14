ServerEvents.recipes(event =>
{
    const _this = id => "lycanitesmobs:" + id;
    const _bount = id => "bountifulbaubles:" + id;
    const _supple = id => "supplementaries:" + id;
    const _mc = id => "minecraft:" + id;
    const _ice = id => "iceandfire:" + id;
    const _alexsm = id => "alexsmobs:" + id;
    const _alexsc = id => "alexscaves:" + id;
    const _enderman = id => "endermanoverhaul:" + id;
    const _twi = id => "twilightforest:" + id;
    const _quk = id => "quark:" + id;
    const _xat = id => "xat:" + id;
    const _tcons = id => "tconstruct:" + id;
    const _aqu = id => "aquamirae:" + id;
    const _create = id => "create:" + id;
    const _grave = id => "graveyard:" + id;

    // 幽冥粉
    event.shapeless({ item: _bount("spectral_silt"), count: 4 }, [
        "#lycanitesmobs:disintegration_tablet",
        _bount("disintegration_tablet")
    ]);

    // 兽鞍
    event.remove({
        output: [
            _this("saddle_anthronian"),
            _this("saddle_worm"),
            _this("saddle_aberration"),
            _this("saddle_reptile"),
            _this("saddle_dragon"),
            _this("saddle_beast"),
            _this("saddle_amphibian"),
            _this("saddle_imp"),
            _this("saddle_aquatic"),
            _this("saddle_slime"),
            _this("saddle_avian"),
            _this("saddle_golem"),
            _this("saddle_arachnid"),
            _this("saddle_plant"),
            _this("saddle_undead"),
            _this("saddle_insect"),
            _this("saddle_demon")
        ]
    });

    // 人形
    event.shaped(_this("saddle_anthronian"), [
        [_supple("rope"), _supple("rope"), _mc("gold_ingot")],
        [_supple("rope"), _mc("saddle"), _mc("scaffolding")],
        [_supple("rope"), _mc("leather_boots"), _mc("gold_ingot")]
    ]);

    // 蠕虫
    event.shaped(_this("saddle_worm"), [
        [_ice("deathworm_chitin_red"), _ice("deathworm_chitin_red"), _ice("deathworm_chitin_red")],
        [_alexsm("shed_snake_skin"), _mc("saddle"), _alexsm("shed_snake_skin")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 畸变
    event.shaped(_this("saddle_aberration"), [
        [_alexsc("polymer_plate"), _alexsc("polymer_plate"), _alexsc("polymer_plate")],
        [_enderman("ancient_pearl"), _mc("saddle"), _enderman("ancient_pearl")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 爬行
    event.shaped(_this("saddle_reptile"), [
        [_twi("alpha_yeti_fur"), _twi("alpha_yeti_fur"), _twi("alpha_yeti_fur")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_twi("arctic_fur"), _twi("arctic_fur"), _twi("arctic_fur")]
    ]);

    // 巨龙
    event.shaped(_this("saddle_dragon"), [
        [_alexsc("tough_hide"), _alexsc("tough_hide"), _alexsc("tough_hide")],
        [_mc("chain"), _mc("saddle"), _mc("chain")],
        [_alexsc("tectonic_shard"), _ice("sapphire_gem"), _alexsc("tectonic_shard")]
    ]);

    // 野兽
    event.shaped(_this("saddle_beast"), [
        [_alexsm("bear_fur"), _alexsm("bear_fur"), _alexsm("bear_fur")],
        [_ice("troll_tusk"), _mc("saddle"), _ice("troll_tusk")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 两栖
    event.shaped(_this("saddle_amphibian"), [
        [_alexsc("ferrouslime_ball"), _alexsc("ferrouslime_ball"), _alexsc("ferrouslime_ball")],
        [_quk("crab_leg"), _mc("saddle"), _quk("crab_leg")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 天使
    event.shaped(_this("saddle_angel"), [
        [_mc("feather"), _mc("feather"), _mc("feather")],
        [_xat("glowing_powder"), _mc("saddle"), _xat("glowing_powder")],
        [_mc("string"), _mc("string"), _mc("string")]
    ]);

    // 小鬼
    event.shaped(_this("saddle_imp"), [
        [_ice("sea_serpent_scales_purple"), _supple("rope"), _tcons("amethyst_bronze_ingot")],
        [_ice("sea_serpent_scales_purple"), _mc("saddle"), _tcons("amethyst_bronze_ingot")],
        [_ice("sea_serpent_scales_purple"), _supple("rope"), _tcons("amethyst_bronze_ingot")]
    ]);

    // 水生
    event.shaped(_this("saddle_aquatic"), [
        [_ice("sea_serpent_scales_blue"), _ice("sea_serpent_scales_blue"), _ice("sea_serpent_scales_blue")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_aqu("fin"), _aqu("fin"), _aqu("fin")]
    ]);

    // 史莱姆
    event.shaped(_this("saddle_slime"), [
        [_tcons("queens_slime_ingot"), _tcons("queens_slime_ingot"), _tcons("queens_slime_ingot")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_create("super_glue"), _create("super_glue"), _create("super_glue")]
    ]);

    // 飞禽
    event.shaped(_this("saddle_avian"), [
        [_tcons("slimesteel_ingot"), _tcons("slimesteel_ingot"), _tcons("slimesteel_ingot")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_ice("stymphalian_bird_feather"), _ice("stymphalian_bird_feather"), _ice("stymphalian_bird_feather")]
    ]);

    // 元素："lycanitesmobs:saddle_elemental"（仅创造模式）

    // 傀儡
    event.shaped(_this("saddle_golem"), [
        [_create("cardboard"), _create("cardboard"), _create("cardboard")],
        [_create("shaft"), _mc("saddle"), _create("shaft")],
        [_create("cogwheel"), _create("large_cogwheel"), _create("cogwheel")]
    ]);

    // 蜘蛛
    event.shaped(_this("saddle_arachnid"), [
        [_mc("spider_eye"), _mc("spider_eye"), _mc("spider_eye")],
        [_alexsm("centipede_leg"), _mc("saddle"), _alexsm("centipede_leg")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 植物
    event.shaped(_this("saddle_plant"), [
        [_twi("steeleaf_ingot"), _twi("steeleaf_ingot"), _twi("steeleaf_ingot")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_twi("ironwood_ingot"), _twi("ironwood_ingot"), _twi("ironwood_ingot")]
    ]);

    // 亡灵
    event.shaped(_this("saddle_undead"), [
        [_grave("dark_iron_ingot"), _grave("dark_iron_ingot"), _grave("dark_iron_ingot")],
        [_alexsc("shadow_silk"), _mc("saddle"), _alexsc("shadow_silk")],
        [_mc("amethyst_shard"), _mc("amethyst_shard"), _mc("amethyst_shard")]
    ]);

    // 昆虫
    event.shaped(_this("saddle_insect"), [
        [_twi("naga_scale"), _twi("naga_scale"), _twi("naga_scale")],
        [_alexsm("blood_sac"), _mc("saddle"), _alexsm("blood_sac")],
        [_supple("rope"), _supple("rope"), _supple("rope")]
    ]);

    // 恶魔
    event.shaped(_this("saddle_demon"), [
        [_alexsc("occult_gem"), _supple("rope"), _quk("red_stool")],
        [_supple("rope"), _mc("saddle"), _supple("rope")],
        [_grave("corruption"), _grave("corruption"), _grave("corruption")]
    ]);
});
