ServerEvents.tags("item", event =>
{
    const _this = id => "tp_armorunder:" + id;

    // 外在温度：手持物品
    // const hot_held = "toughasnails:heating_held_items";
    // const hot_fuel = "toughasnails:thermoregulator_heating_fuel";

    const cool_held = "toughasnails:cooling_held_items";
    const cool_fuel = "toughasnails:thermoregulator_cooling_fuel";

    // // 热
    // [
        
    // ].forEach(item =>
    // {
    //     event.add(hot_held, item);
    //     event.add(hot_fuel, item);
    // });

    // 冷
    [
        _this("freeze_powder")
    ].forEach(item =>
    {
        event.add(cool_held, item);
        event.add(cool_fuel, item);
    });
});
