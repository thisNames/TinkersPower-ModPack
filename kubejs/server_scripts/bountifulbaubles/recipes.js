ServerEvents.recipes(event =>
{
    const _this = id => "bountifulbaubles:" + id;
    const _trinke = id => "trinketsandbaubles:" + id;
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


    event.shaped(_this("phylactery_charm"), [
        [_mc("wither_skeleton_skull"), _quark("diamond_heart"), ""],
        [_this("magic_mirror"), _this("broken_heart"), ""],
        ["", "", ""]
    ]);

    event.shaped(_this("phylactery_charm"), [
        [_mc("wither_skeleton_skull"), _quark("diamond_heart"), ""],
        [_this("wormhole_mirror"), _this("broken_heart"), ""],
        ["", "", ""]
    ]);

    event.shaped(_this("wormhole_mirror"), [
        [_this("potion_wormhole"), _this("potion_wormhole"), _this("potion_wormhole")],
        [_this("potion_wormhole"), _this("magic_mirror"), _this("potion_wormhole")],
        [_this("potion_wormhole"), _this("potion_wormhole"), _this("potion_wormhole")]
    ]);

    event.shaped(_this("obsidian_skull"), [
        [_mc("obsidian"), _mc("blaze_powder"), _mc("obsidian")],
        [Item.of(_mc("potion"), "{Potion:\"minecraft:fire_resistance\"}").weakNBT(), _mc("wither_skeleton_skull"), Item.of(_mc("potion"), "{Potion:\"minecraft:fire_resistance\"}").weakNBT()],
        [_mc("obsidian"), _mc("blaze_powder"), _mc("obsidian")]
    ]);

    event.shaped(_this("pride_pendant"), [
        ["", _ice("silver_ingot"), ""],
        [_ice("silver_ingot"), _this("amulet_sin_empty"), _ice("silver_ingot")],
        ["", _trinke("glowing_gem"), ""]
    ]);

    event.shaped(_this("gluttony_pendant"), [
        ["", _art("plastic_drinking_hat"), ""],
        [_mc("cake"), _this("amulet_sin_empty"), _mc("cake")],
        ["", _mc("enchanted_golden_apple"), ""]
    ]);

    event.shaped(_this("gluttony_pendant"), [
        ["", _art("novelty_drinking_hat"), ""],
        [_mc("cake"), _this("amulet_sin_empty"), _mc("cake")],
        ["", _mc("enchanted_golden_apple"), ""]
    ]);

    event.replaceInput({ output: _this("ankh_charm") }, _mc("gold_block"), _trinke("glowing_ingot"));

    event.shapeless(_this("spectral_silt"), ["#bountifulbaubles:baubles", _this("disintegration_tablet")]);

    event.recipes.kubejs.shaped(_this("resplendent_token"), [
        [_this("spectral_silt"), _trinke("glowing_powder"), _this("spectral_silt")],
        [_trinke("glowing_powder"), _trinke("glowing_ingot"), _trinke("glowing_powder")],
        [_this("spectral_silt"), _trinke("glowing_powder"), _this("spectral_silt")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(2);

        return output;
    });
});
