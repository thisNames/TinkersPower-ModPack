ServerEvents.tags("item", event =>
{
    const _this = id => "cataclysm:" + id;

    // 外在温度：手持物品
    const hot_held = "toughasnails:heating_held_items";
    const hot_fuel = "toughasnails:thermoregulator_heating_fuel";

    const cool_held = "toughasnails:cooling_held_items";
    const cool_fuel = "toughasnails:thermoregulator_cooling_fuel";

    // 热
    [
        _this("ignitium_ingot"),
        _this("burning_ashes"),
        _this("dying_ember"),
        _this("ignitium_helmet"),
        _this("ignitium_chestplate"),
        _this("ignitium_elytra_chestplate"),
        _this("ignitium_leggings"),
        _this("ignitium_boots"),
        _this("flame_eye")
    ].forEach(item =>
    {
        event.add(hot_held, item);
        event.add(hot_fuel, item);
    });

    // 冷
    [
        _this("lacrima"),
        _this("storm_eye"),
        _this("essence_of_the_storm")
    ].forEach(item =>
    {
        event.add(cool_held, item);
        event.add(cool_fuel, item);
    });
});
