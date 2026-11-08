ServerEvents.recipes(event =>
{
    const _this = id => "bountifulbaubles:" + id;
    const _trinke = id => "xat:" + id;
    const _ice = id => "iceandfire:" + id;
    const _quark = id => "quark:" + id;
    const _art = id => "artifacts:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("phylactery_charm"),
            _this("obsidian_skull"),
            _this("pride_pendant"),
            _this("wrath_pendant"),
            _this("gluttony_pendant"),
            _this("resplendent_token")
        ]
    });

    // 勾玉护符
    event.shaped(_this("phylactery_charm"), [
        [_mc("wither_skeleton_skull"), _quark("diamond_heart"), ""],
        [_this("wormhole_mirror"), _this("broken_heart"), ""],
        ["", "", ""]
    ]);

    // 渊镜
    event.shaped(_this("wormhole_mirror"), [
        [_this("potion_wormhole"), _this("potion_wormhole"), _this("potion_wormhole")],
        [_this("potion_wormhole"), _this("magic_mirror"), _this("potion_wormhole")],
        [_this("potion_wormhole"), _this("potion_wormhole"), _this("potion_wormhole")]
    ]);

    // 黑曜石头颅
    event.shaped(_this("obsidian_skull"), [
        [_mc("obsidian"), _mc("blaze_powder"), _mc("obsidian")],
        [Item.of(_mc("potion"), "{Potion:\"minecraft:fire_resistance\"}").weakNBT(), _mc("wither_skeleton_skull"), Item.of(_mc("potion"), "{Potion:\"minecraft:fire_resistance\"}").weakNBT()],
        [_mc("obsidian"), _mc("blaze_powder"), _mc("obsidian")]
    ]);

    // 骄傲吊坠
    event.shaped(_this("pride_pendant"), [
        ["", _ice("silver_ingot"), ""],
        [_ice("silver_ingot"), _this("amulet_sin_empty"), _ice("silver_ingot")],
        ["", _trinke("glowing_gem"), ""]
    ]);

    // 暴食吊坠
    event.shaped(_this("gluttony_pendant"), [
        ["", _art("plastic_drinking_hat"), ""],
        [_mc("cake"), _this("wrath_pendant"), _mc("cake")],
        ["", _mc("enchanted_golden_apple"), ""]
    ]);

    // 暴食吊坠
    event.shaped(_this("gluttony_pendant"), [
        ["", _art("novelty_drinking_hat"), ""],
        [_mc("cake"), _this("wrath_pendant"), _mc("cake")],
        ["", _mc("enchanted_golden_apple"), ""]
    ]);

    // 安卡护符
    event.replaceInput({ output: _this("ankh_charm") }, _mc("gold_block"), _trinke("glowing_ingot"));

    // 幽冥粉
    event.shapeless(_this("spectral_silt"), ["#bountifulbaubles:baubles", _this("disintegration_tablet")]);

    // 闪耀币 
    event.recipes.kubejs.shaped({ item: _this("resplendent_token"), count: 2 }, [
        [_this("spectral_silt"), _trinke("glowing_powder"), _this("spectral_silt")],
        [_trinke("glowing_powder"), _trinke("glowing_ingot"), _trinke("glowing_powder")],
        [_this("spectral_silt"), _trinke("glowing_powder"), _this("spectral_silt")]
    ]);
});
