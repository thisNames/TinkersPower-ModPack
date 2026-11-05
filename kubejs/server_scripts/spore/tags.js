ServerEvents.tags("item", event =>
{
    const _this = id => "spore:" + id;

    // 剑
    [
        _this("greatsword"),
        _this("scythe"),
        _this("rapier")
    ].forEach(item => event.add("minecraft:swords", item));
});
