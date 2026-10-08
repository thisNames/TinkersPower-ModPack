ServerEvents.tags("block", event =>
{
    const _this = id => "aquamirae:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [

    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("frozen_chest")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
