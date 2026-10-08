ServerEvents.tags("block", event =>
{
    const _this = id => "minecraft:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("torch")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("ice"),
        _this("snow_block"),
        _this("snow"),
        _this("soul_torch")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
