ServerEvents.recipes(event =>
{
    const _this = id => "tp_armorunder:" + id;
    const _mc = id => "minecraft:" + id;
    const _ice = id => "iceandfire:" + id;
    const _tcon = id => "tconstruct:" + id;
    const _thinking = id => "tinkers_thinking:" + id;

    // 烈焰粉
    event.recipes.kubejs.shapeless(_mc("blaze_powder"), [_ice("fire_lily")]);
    // 寒冰粉
    event.recipes.kubejs.shapeless(_this("freeze_powder"), [_ice("frost_lily")]);

    // 加热凝胶
    [
        _mc("magma_cream"),
        _mc("blaze_powder"),
        _ice("fire_dragon_blood"),
        _tcon("ichor_slime_ball"),
    ].forEach(item =>
    {
        event.recipes.kubejs.shaped(_this("heating_goo"), [
            [_mc("slime_ball"), _mc("slime_ball"), _mc("slime_ball")],
            [_mc("slime_ball"), item, _mc("slime_ball")],
            [_mc("slime_ball"), _mc("slime_ball"), _mc("slime_ball")]
        ]).modifyResult((inputs, output) =>
        {
            output.setCount(8);
            return output;
        });
    });


    // 降温凝胶
    [
        _this("freeze_powder"),
        _ice("ice_dragon_blood"),
        _thinking("chillslime_cryogel"),
    ].forEach(item =>
    {
        event.recipes.kubejs.shaped(_this("cooling_goo"), [
            [_mc("slime_ball"), _mc("slime_ball"), _mc("slime_ball")],
            [_mc("slime_ball"), item, _mc("slime_ball")],
            [_mc("slime_ball"), _mc("slime_ball"), _mc("slime_ball")]
        ]).modifyResult((inputs, output) =>
        {
            output.setCount(8);
            return output;
        });
    });

    // 加热丝线
    event.recipes.kubejs.shaped(_this("warm_liner_material"), [
        [_mc("string"), _mc("string"), ""],
        [_mc("string"), _this("heating_goo"), ""],
        ["", "", ""]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(3);
        return output;
    });

    // 降温丝线
    event.recipes.kubejs.shaped(_this("cool_liner_material"), [
        [_mc("string"), _mc("string"), ""],
        [_mc("string"), _this("cooling_goo"), ""],
        ["", "", ""]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(3);
        return output;
    });

    // 奥兹丝线
    event.recipes.kubejs.shaped(_this("flipflop_liner_material"), [
        [_this("warm_liner_material"), _this("warm_liner_material"), _this("cool_liner_material")],
        [_this("warm_liner_material"), "", _this("cool_liner_material")],
        [_this("warm_liner_material"), _this("cool_liner_material"), _this("cool_liner_material")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(4);
        return output;
    });

    // 奥兹内衬
    // 奥兹内衬头盔
    event.recipes.kubejs.shaped(_this("auto_helmet_liner"), [
        [_this("flipflop_liner_material"), _this("flipflop_liner_material"), _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")],
        ["", "", ""]
    ]);

    // 奥兹内衬胸甲
    event.recipes.kubejs.shaped(_this("auto_chestplate_liner"), [
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), _this("flipflop_liner_material"), _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), _this("flipflop_liner_material"), _this("flipflop_liner_material")]
    ]);

    // 奥兹内衬护腿
    event.recipes.kubejs.shaped(_this("auto_leggings_liner"), [
        [_this("flipflop_liner_material"), _this("flipflop_liner_material"), _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")]
    ]);

    // 奥兹内衬靴子
    event.recipes.kubejs.shaped(_this("auto_boots_liner"), [
        ["", "", ""],
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")],
        [_this("flipflop_liner_material"), "", _this("flipflop_liner_material")]
    ]);

    // 保温内衬
    // 保温内衬头盔
    event.recipes.kubejs.shaped(_this("beekeeper_helmet_liner"), [
        [_this("warm_liner_material"), _this("warm_liner_material"), _this("warm_liner_material")],
        [_this("warm_liner_material"), "", _this("warm_liner_material")],
        ["", "", ""]
    ]);

    // 保温内衬胸甲
    event.recipes.kubejs.shaped(_this("beekeeper_chestplate_liner"), [
        [_this("warm_liner_material"), "", _this("warm_liner_material")],
        [_this("warm_liner_material"), _this("warm_liner_material"), _this("warm_liner_material")],
        [_this("warm_liner_material"), _this("warm_liner_material"), _this("warm_liner_material")]
    ]);

    // 保温内衬护腿
    event.recipes.kubejs.shaped(_this("beekeeper_leggings_liner"), [
        [_this("warm_liner_material"), _this("warm_liner_material"), _this("warm_liner_material")],
        [_this("warm_liner_material"), "", _this("warm_liner_material")],
        [_this("warm_liner_material"), "", _this("warm_liner_material")]
    ]);

    // 保温内衬靴子
    event.recipes.kubejs.shaped(_this("beekeeper_boots_liner"), [
        ["", "", ""],
        [_this("warm_liner_material"), "", _this("warm_liner_material")],
        [_this("warm_liner_material"), "", _this("warm_liner_material")]
    ]);

    // 降温内衬
    // 降温内衬头盔
    event.recipes.kubejs.shaped(_this("cool_helmet_liner"), [
        [_this("cool_liner_material"), _this("cool_liner_material"), _this("cool_liner_material")],
        [_this("cool_liner_material"), "", _this("cool_liner_material")],
        ["", "", ""]
    ]);

    // 降温内衬胸甲
    event.recipes.kubejs.shaped(_this("cool_chestplate_liner"), [
        [_this("cool_liner_material"), "", _this("cool_liner_material")],
        [_this("cool_liner_material"), _this("cool_liner_material"), _this("cool_liner_material")],
        [_this("cool_liner_material"), _this("cool_liner_material"), _this("cool_liner_material")]
    ]);

    // 降温内衬护腿
    event.recipes.kubejs.shaped(_this("cool_leggings_liner"), [
        [_this("cool_liner_material"), _this("cool_liner_material"), _this("cool_liner_material")],
        [_this("cool_liner_material"), "", _this("cool_liner_material")],
        [_this("cool_liner_material"), "", _this("cool_liner_material")]
    ]);

    // 降温内衬靴子
    event.recipes.kubejs.shaped(_this("cool_boots_liner"), [
        ["", "", ""],
        [_this("cool_liner_material"), "", _this("cool_liner_material")],
        [_this("cool_liner_material"), "", _this("cool_liner_material")]
    ]);
});
