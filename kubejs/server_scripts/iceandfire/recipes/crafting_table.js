ServerEvents.recipes(event =>
{
    const _this = id => "iceandfire:" + id;
    const _rail = id => "railways:" + id;

    event.remove({
        output: [
            _this("ghost_sword")
        ]
    });

    // 幻灵剑
    event.shaped(_this("ghost_sword"), [
        ["", _this("ghost_ingot"), ""],
        ["", _this("ghost_ingot"), ""],
        ["", _this("dragonbone"), ""]
    ]);
    
    // 龙鳞
    // 火龙：火红/沉金/翡绿/烬灰
    event.shapeless(_this("dragonscales_red"), [_this("dragonscales_white"), _rail("maroon_paint_pitcher")]);
    event.shapeless(_this("dragonscales_bronze"), [_this("dragonscales_white"), _rail("ochrum_paint_pitcher")]);
    event.shapeless(_this("dragonscales_green"), [_this("dragonscales_white"), _rail("olive_green_paint_pitcher")]);
    event.shapeless(_this("dragonscales_gray"), [_this("dragonscales_white"), _rail("gray_paint_pitcher")]);

    // 冰龙：冰蓝/玉靓/黯银
    event.shapeless(_this("dragonscales_blue"), [_this("dragonscales_white"), _rail("light_blue_paint_pitcher")]);
    event.shapeless(_this("dragonscales_sapphire"), [_this("dragonscales_white"), _rail("turquoise_paint_pitcher")]);
    event.shapeless(_this("dragonscales_silver"), [_this("dragonscales_white"), _rail("tuff_paint_pitcher")]);
    // 淞白
    [
        // 火龙：火红/沉金/翡绿/烬灰
        _this("dragonscales_red"),
        _this("dragonscales_bronze"),
        _this("dragonscales_green"),
        _this("dragonscales_gray"),
        // 冰龙：冰蓝/玉靓/黯银
        _this("dragonscales_blue"),
        _this("dragonscales_sapphire"),
        _this("dragonscales_silver"),
        // 电龙：电青/晶紫/铜赤/夜黑
        _this("dragonscales_electric"),
        _this("dragonscales_amythest"),
        _this("dragonscales_copper"),
        _this("dragonscales_black")
    ].forEach(item => event.shapeless(_this("dragonscales_white"), [item, _rail("white_paint_pitcher")]));

    // 电龙：电青/晶紫/铜赤/夜黑
    event.shapeless(_this("dragonscales_electric"), [_this("dragonscales_white"), _rail("royal_blue_paint_pitcher")]);
    event.shapeless(_this("dragonscales_amythest"), [_this("dragonscales_white"), _rail("purple_paint_pitcher")]);
    event.shapeless(_this("dragonscales_copper"), [_this("dragonscales_white"), _rail("granite_paint_pitcher")]);
    event.shapeless(_this("dragonscales_black"), [_this("dragonscales_white"), _rail("black_paint_pitcher")]);

    // 虫壳甲
    // 虫壳：沙褐/血红
    event.shapeless(_this("deathworm_chitin_yellow"), [_this("deathworm_chitin_white"), _rail("diorite_paint_pitcher")]);
    event.shapeless(_this("deathworm_chitin_red"), [_this("deathworm_chitin_white"), _rail("vermilion_paint_pitcher")]);
    // 虫壳：苍白
    [
        _this("deathworm_chitin_yellow"),
        _this("deathworm_chitin_red")
    ].forEach(item => event.shapeless(_this("deathworm_chitin_white"), [item, _rail("white_paint_pitcher")]));

    // 闪光鳞片
    // 海蟒：7 种海蟒鳞片合成
    event.recipes.kubejs.shapeless({ item: _this("shiny_scales"), count: 7 }, [
        _this("sea_serpent_scales_purple"),
        _this("sea_serpent_scales_red"),
        _this("sea_serpent_scales_green"),
        _this("sea_serpent_scales_teal"),
        _this("sea_serpent_scales_deepblue"),
        _this("sea_serpent_scales_bronze"),
        _this("sea_serpent_scales_blue")
    ]);

    // 海蟒鳞片
    // 海蟒：沉紫/赤红/海绿/蓝绿/深蓝/铜黄/蔚蓝
    event.shapeless(_this("sea_serpent_scales_purple"), [_this("shiny_scales"), _rail("purple_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_red"), [_this("shiny_scales"), _rail("red_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_green"), [_this("shiny_scales"), _rail("lime_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_teal"), [_this("shiny_scales"), _rail("cyan_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_deepblue"), [_this("shiny_scales"), _rail("royal_blue_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_bronze"), [_this("shiny_scales"), _rail("dripstone_paint_pitcher")]);
    event.shapeless(_this("sea_serpent_scales_blue"), [_this("shiny_scales"), _rail("light_blue_paint_pitcher")]);
});
