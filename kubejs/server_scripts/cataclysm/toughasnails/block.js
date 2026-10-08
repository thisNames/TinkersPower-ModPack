ServerEvents.tags("block", event =>
{
    const _this = id => "cataclysm:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("altar_of_fire"),
        _this("ignitium_block")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("pointed_icicle"),
        _this("void_lantern_block")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
