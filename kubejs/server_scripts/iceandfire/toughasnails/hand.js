ServerEvents.tags("item", event =>
{
    const _this = id => "iceandfire:" + id;

    // 外在温度：手持物品
    const hot_held = "toughasnails:heating_held_items";
    const hot_fuel = "toughasnails:thermoregulator_heating_fuel";

    const cool_held = "toughasnails:cooling_held_items";
    const cool_fuel = "toughasnails:thermoregulator_cooling_fuel";

    // 热
    [
        _this("fire_stew"),
        _this("fire_dragon_heart"),
        _this("fire_dragon_flesh"),
        _this("fire_dragon_blood")
    ].forEach(item =>
    {
        event.add(hot_held, item);
        event.add(hot_fuel, item);
    });

    // 冷
    [
        _this("frost_stew"),
        _this("ice_dragon_heart"),
        _this("ice_dragon_flesh"),
        _this("ice_dragon_blood")
    ].forEach(item =>
    {
        event.add(cool_held, item);
        event.add(cool_fuel, item);
    });
});
