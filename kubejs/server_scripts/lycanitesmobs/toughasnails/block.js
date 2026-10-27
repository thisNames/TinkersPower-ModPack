ServerEvents.tags("block", event =>
{
    const _this = id => "lycanitesmobs:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("doomfire"),
        _this("hellfire"),
        _this("primefire"),
        _this("scorchfire"),
        _this("smitefire"),
        _this("ashencrystal")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("frostfire"),
        _this("icefire"),
        _this("shadowfire")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
