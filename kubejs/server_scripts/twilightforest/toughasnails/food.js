ServerEvents.tags("item", event =>
{
    const _this = id => "twilightforest:" + id;

    // const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";
    const food = "toughasnails:thermoregulator_heating_fuel";

    // 热食
    [
        _this("hydra_chop")
    ].forEach(item =>
    {
        event.add(hot_food, item);
        event.add(food, item);
    });
});
