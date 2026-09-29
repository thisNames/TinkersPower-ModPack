ServerEvents.tags("item", event =>
{
    const _this = id => "protection_pixel:" + id;

    // 外在温度：盔甲
    const hot_armor = "toughasnails:heating_armor";
    // const cool_armor = "toughasnails:cooling_armor";

    // 热盔甲
    [
        _this("wingsofprism_chestplate"),
        _this("workerhornet_chestplate"),
        _this("magneticstorm_chestplate"),
        _this("pioneer_chestplate"),
        _this("hellsnake_chestplate"),
        _this("typhoon_chestplate"),
        _this("breakeras_chestplate"),
        _this("breaker_chestplate"),
        _this("workerhornetas_chestplate"),
        _this("magneticstormas_chestplate"),
        _this("hellsnakeas_chestplate"),
        _this("typhoonas_chestplate"),
        _this("floatshield_chestplate"),
        _this("tosaki_chestplate"),
        _this("pioneeras_chestplate"),
        _this("wingsofprismas_chestplate"),
        _this("falconnest_chestplate"),
        _this("falconnestas_chestplate"),
    ].forEach(item =>
    {
        event.add(hot_armor, item);
    });
});
