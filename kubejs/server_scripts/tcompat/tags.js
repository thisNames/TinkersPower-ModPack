ServerEvents.tags("item", event =>
{
    const _this = id => "tcompat:" + id;

    // 剑
    [
        _this("glaive")
    ].forEach(item =>
    {
        event.add("minecraft:swords", item);
    });
});
