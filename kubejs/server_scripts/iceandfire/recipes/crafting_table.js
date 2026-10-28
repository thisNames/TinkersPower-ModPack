ServerEvents.recipes(event =>
{
    const _this = id => "iceandfire:" + id;

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
});
