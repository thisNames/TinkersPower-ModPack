ServerEvents.tags("item", event =>
{
    const _this = id => "alexscaves:" + id;

    const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";
    const food = "toughasnails:thermoregulator_heating_fuel";

    // 冷食
    [
        _this("sundae")
    ].forEach(item =>
    {
        event.add(cool_food, item);
        event.add(food, item);
    });

    // 热食
    [
        _this("seething_stew"),
        _this("primordial_soup"),
        _this("green_soylent")
    ].forEach(item =>
    {
        event.add(hot_food, item);
        event.add(food, item);
    });
});
