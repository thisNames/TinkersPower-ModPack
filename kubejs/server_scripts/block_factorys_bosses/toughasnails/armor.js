ServerEvents.tags("item", event =>
{
    const _this = id => "block_factorys_bosses:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    // const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        // 滕炎
        _this("dragon_bones_chestplate"),
        _this("dragon_bones_leggings"),
        _this("dragon_bones_boots")
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
