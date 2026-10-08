ServerEvents.tags("block", event =>
{
    const _this = id => "quark:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("blaze_lantern")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("permafrost"),
        _this("permafrost_wall"),
        _this("permafrost_slab"),
        _this("permafrost_vertical_slab"),
        _this("permafrost_stairs"),
        _this("permafrost_bricks"),
        _this("permafrost_bricks_wall"),
        _this("permafrost_bricks_slab"),
        _this("permafrost_bricks_vertical_slab"),
        _this("permafrost_bricks_stairs")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
