ServerEvents.tags("item", event =>
{
    const _this = id => "tinkers_things:" + id;

    // 铲
    [
        _this("shovel")
    ].forEach(item =>
    {
        event.add("minecraft:shovels", item);
    });

    // 斧
    [
        _this("halberd"),
    ].forEach(item =>
    {
        event.add("minecraft:axes", item);
    });

    // 剑、三叉戟
    [
        _this("blockram")
    ].forEach(item =>
    {
        event.add("minecraft:swords", item);
        event.add("forge:tools/tridents", item);
    });
});
