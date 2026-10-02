ServerEvents.recipes(event =>
{
    const _this = id => "bountifulbaubles:" + id;
    const _quark = id => "quark:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("phylactery_charm")
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
});
