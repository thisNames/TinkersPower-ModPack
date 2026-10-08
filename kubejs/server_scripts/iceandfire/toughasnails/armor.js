ServerEvents.tags("item", event =>
{
    const _this = id => "iceandfire:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    // const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        // 拟羊
        _this("sheep_helmet"),
        _this("sheep_chestplate"),
        _this("sheep_leggings"),
        _this("sheep_boots"),
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
