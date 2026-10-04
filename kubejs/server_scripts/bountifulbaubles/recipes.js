ServerEvents.recipes(event =>
{
    const _this = id => "bountifulbaubles:" + id;
    const _quark = id => "quark:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("phylactery_charm"),
            _this("obsidian_skull")
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
});
