ServerEvents.tags("item", event =>
{
    const _this = id => "aquamirae:" + id;

    const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";
    const food = "toughasnails:thermoregulator_heating_fuel";

    // 冷食
    [
        _this("poseidons_breakfast")
    ].forEach(item =>
    {
        event.add(cool_food, item);
        event.add(food, item);
    });

    // 热食
    [
        _this("sea_casserole"),
        _this("sea_stew")
    ].forEach(item =>
    {
        event.add(hot_food, item);
        event.add(food, item);
    });
});
