ServerEvents.tags("item", event =>
{
    const _this = id => "tide:" + id;

    // 外在温度：手持物品
    const hot_held = "toughasnails:heating_held_items";
    const hot_fuel = "toughasnails:thermoregulator_heating_fuel";

    const cool_held = "toughasnails:cooling_held_items";
    const cool_fuel = "toughasnails:thermoregulator_cooling_fuel";

    // 热
    [
        _this("magma_mackerel_bucket"),
        _this("ember_koi_bucket"),
        _this("ash_perch_bucket"),
        _this("obsidian_pike_bucket"),
        _this("volcano_tuna_bucket"),
        _this("inferno_guppy_bucket"),
        _this("warped_guppy_bucket"),
        _this("crimson_fangjaw_bucket"),
        _this("soulscale_bucket"),
        _this("blazing_swordfish_bucket")
    ].forEach(item =>
    {
        event.add(hot_held, item);
        event.add(hot_fuel, item);
    });

    // 冷
    [
        _this("frostbite_flounder_bucket")
    ].forEach(item =>
    {
        event.add(cool_held, item);
        event.add(cool_fuel, item);
    });
});
