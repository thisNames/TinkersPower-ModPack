ServerEvents.tags("block", event =>
{
    const _this = id => "alexscaves:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    // const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("uranium_rod"),
        _this("ambersol"),
        _this("primal_magma"),
        _this("carmine_froglight")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // // 冷
    // [

    // ].forEach(item =>
    // {
    //     event.add(cool_block, item);
    // });
});
