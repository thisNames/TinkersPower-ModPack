ServerEvents.tags("block", event =>
{
    const _this = id => "supplementaries:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("sconce"),
        _this("deepslate_lamp"),
        _this("fire_pit"),
        _this("stone_lamp")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("sconce_soul"),
        _this("blackstone_lamp")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
