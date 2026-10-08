ServerEvents.tags("item", event =>
{
    const _this = id => "alexsmobs:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    const cool_armor = "toughasnails:cooling_armor";

    // 冷盔甲
    [
        _this("froststalker_helmet"),
    ].forEach(item =>
    {
        event.add(cool_armor, item);
    });

    // 热盔甲
    [
        _this("roadrunner_boots"),
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
