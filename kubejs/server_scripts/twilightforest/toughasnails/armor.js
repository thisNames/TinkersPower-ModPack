ServerEvents.tags("item", event =>
{
    const _this = id => "twilightforest:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    // const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        // 炽热
        _this("fiery_helmet"),
        _this("fiery_chestplate"),
        _this("fiery_leggings"),
        _this("fiery_boots"),
        // 极地
        _this("arctic_helmet"),
        _this("arctic_chestplate"),
        _this("arctic_leggings"),
        _this("arctic_boots"),
        // 雪怪
        _this("yeti_helmet"),
        _this("yeti_chestplate"),
        _this("yeti_leggings"),
        _this("yeti_boots")
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
