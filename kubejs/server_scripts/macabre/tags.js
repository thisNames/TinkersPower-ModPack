ServerEvents.tags("item", event =>
{
    const _this = id => "macabre:" + id;

    // 剑
    [
        _this("hemorrhage_sword"),
        _this("true_gorescythe")
    ].forEach(item => event.add("minecraft:swords", item));
});
