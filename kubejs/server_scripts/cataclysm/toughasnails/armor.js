ServerEvents.tags("item", event =>
{
    const _this = id => "cataclysm:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    // const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        // 滕炎
        _this("ignitium_helmet"),
        _this("ignitium_chestplate"),
        _this("ignitium_leggings"),
        _this("ignitium_boots"),
        // 鞘翅
        _this("ignitium_elytra_chestplate")
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
