ServerEvents.tags("item", event =>
{
    const _this = id => "tinkers_ingenuity:" + id;

    //剑、三叉戟
    [
        _this("meteor_spear")
    ].forEach(item =>
    {
        event.add("minecraft:swords", item);
        event.add("forge:tools/tridents", item);
    });
});
