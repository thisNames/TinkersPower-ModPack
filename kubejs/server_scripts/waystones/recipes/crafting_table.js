ServerEvents.recipes(event =>
{
    const _this = id => "waystones:" + id;
    const _trink = id => "xat:" + id;
    const _bount = id => "bountifulbaubles:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("warp_dust"),
            _this("warp_stone"),
            _this("warp_scroll"),
            _this("bound_scroll"),
            _this("return_scroll"),
            _this("warp_plate")
        ]
    });

    // 传送份
    event.recipes.kubejs.shaped({ item: _this("warp_dust"), count: 4 }, [
        [_mc("ender_pearl"), _mc("amethyst_shard"), _bount("spectral_silt")],
        [_bount("spectral_silt"), _bount("spectral_silt"), _bount("spectral_silt")],
        ["", "", ""]
    ]);

    // 传送石
    event.shaped(_this("warp_stone"), [
        [_this("warp_dust"), _mc("ender_pearl"), _this("warp_dust")],
        [_mc("ender_pearl"), _mc("nether_star"), _mc("ender_pearl")],
        [_this("warp_dust"), _mc("ender_pearl"), _this("warp_dust")]
    ]);

    // 传送卷轴
    event.recipes.kubejs.shaped({ item: _this("warp_scroll"), count: 3 }, [
        [_trink("glowing_powder"), _this("warp_dust"), _trink("glowing_powder")],
        [_trink("glowing_powder"), _mc("ender_pearl"), _trink("glowing_powder")],
        [_mc("paper"), _mc("paper"), _mc("paper")]
    ]);

    // 绑定卷轴
    event.recipes.kubejs.shaped({ item: _this("bound_scroll"), count: 3 }, [
        [_this("warp_dust"), _this("warp_dust"), _this("warp_dust")],
        [_trink("glowing_powder"), _mc("ender_pearl"), _trink("glowing_powder")],
        [_mc("paper"), _mc("paper"), _mc("paper")]
    ]);

    // 回城卷轴
    event.recipes.kubejs.shaped({ item: _this("return_scroll"), count: 3 }, [
        ["", "", ""],
        [_trink("glowing_powder"), _mc("ender_pearl"), _trink("glowing_powder")],
        [_mc("paper"), _mc("paper"), _mc("paper")]
    ]);

    // 传送踏板
    event.shaped(_this("warp_plate"), [
        [_mc("stone_bricks"), _this("warp_dust"), _mc("stone_bricks")],
        [_this("warp_dust"), _this("warp_stone"), _this("warp_dust")],
        [_mc("stone_bricks"), _this("warp_dust"), _mc("stone_bricks")]
    ]);
});
