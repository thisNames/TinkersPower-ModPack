ServerEvents.tags("item", event =>
{
    const _this = id => "tinkers_battle_spades:" + id;

    // 铲
    [
        _this("battle_spade")
    ].forEach(item =>
    {
        event.add("minecraft:shovels", item);
    });
});
