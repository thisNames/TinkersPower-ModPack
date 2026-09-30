ServerEvents.tags("item", event =>
{
    const _this = id => "tinkers_thinking:" + id;

    // 剑
    [
        _this("cutlass"),
        _this("knife"),
    ].forEach(item =>
    {
        event.add("minecraft:swords", item);
    });

    // 斧
    [
        _this("mace"),
        _this("paxel"),
    ].forEach(item =>
    {
        event.add("minecraft:axes", item);
    });
});
