ServerEvents.tags("item", event =>
{
    const _this = id => "aquamirae:" + id;

    // 外在温度：盔甲
    // const hot_armor = "toughasnails:heating_armor";
    const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        // 滕炎
        _this("abyssal_heaume"),
        _this("abyssal_brigantine"),
        _this("abyssal_leggings"),
        _this("abyssal_boots"),
        // 鞘翅
        _this("abyssal_tiara")
    ].forEach(item =>
    {
        event.add(cool_armor, item);
    });
});
