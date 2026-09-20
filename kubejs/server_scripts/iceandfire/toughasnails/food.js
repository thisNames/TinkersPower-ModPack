ServerEvents.tags("item", event =>
{
    const _this = id => "iceandfire:" + id;

    const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";
    const food = "toughasnails:thermoregulator_heating_fuel";


    // 冷食
    [
        _this("ice_dragon_flesh")
    ].forEach(item =>
    {
        event.add(cool_food, item);
        event.add(food, item);
    });

    // 热食
    [
        _this("fire_dragon_flesh")
    ].forEach(item =>
    {
        event.add(hot_food, item);
        event.add(food, item);
    });
});
