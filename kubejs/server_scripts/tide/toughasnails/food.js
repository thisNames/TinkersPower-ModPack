ServerEvents.tags("item", event =>
{
    const _this = id => "tide:" + id;

    const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";

    // 热食
    [
        _this("midas_fish"),
        _this("ash_perch"),
        _this("magma_mackerel"),
        _this("ember_koi"),
        _this("crimson_fangjaw"),
        _this("inferno_guppy"),
        _this("volcano_tuna"),
        _this("blazing_swordfish")
    ].forEach(item =>
    {
        event.add(hot_food, item);
    });

    // 冷食
    [
        _this("frostbite_flounder")
    ].forEach(item =>
    {
        event.add(cool_food, item);
    });
});
