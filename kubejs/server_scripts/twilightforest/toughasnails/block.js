ServerEvents.tags("block", event =>
{
    const _this = id => "twilightforest:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("fiery_block"),
        _this("ur_ghast_trophy"),
        _this("hydra_trophy")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("snow_queen_trophy"),
        _this("alpha_yeti_trophy")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
