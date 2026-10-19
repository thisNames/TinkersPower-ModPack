ServerEvents.tags("item", event =>
{
    const _this = id => "aquamirae:" + id;

    // 外在温度：盔甲
    // const hot_armor = "toughasnails:heating_armor";
    const cool_armor = "toughasnails:cooling_armor";

    // 冷盔甲
    [
        // 晦暗深海套装
        _this("abyssal_heaume"),
        _this("abyssal_brigantine"),
        _this("abyssal_leggings"),
        _this("abyssal_boots"),
        // 晦暗深海头饰
        _this("abyssal_tiara")
    ].forEach(item =>
    {
        event.add(cool_armor, item);
    });
});
