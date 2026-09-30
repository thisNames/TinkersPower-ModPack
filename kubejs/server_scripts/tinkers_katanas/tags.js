ServerEvents.tags("item", event =>
{
    const _this = id => "tinkers_katanas:" + id;

    // 剑
    [
        _this("katana")
    ].forEach(item =>
    {
        event.add("minecraft:swords", item);
    });
});
