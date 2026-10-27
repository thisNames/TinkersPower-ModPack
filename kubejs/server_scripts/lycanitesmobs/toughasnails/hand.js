ServerEvents.tags("item", event =>
{
    const _this = id => "lycanitesmobs:" + id;

    // 外在温度：手持物品
    const hot_held = "toughasnails:heating_held_items";
    const hot_fuel = "toughasnails:thermoregulator_heating_fuel";

    const cool_held = "toughasnails:cooling_held_items";
    const cool_fuel = "toughasnails:thermoregulator_cooling_fuel";

    // 热
    [
        _this("moglava_bucket"),
        _this("doomfireballcharge"),
        _this("embercharge"),
        _this("magmacharge"),
        _this("primeembercharge"),
        _this("scorchfireballcharge")
    ].forEach(item =>
    {
        event.add(hot_held, item);
        event.add(hot_fuel, item);
    });

    // 冷
    [
        _this("rabbitooze_bucket"),
        _this("blizzardcharge"),
        _this("frostboltcharge"),
        _this("frostwebcharge"),
        _this("icefireballcharge"),
    ].forEach(item =>
    {
        event.add(cool_held, item);
        event.add(cool_fuel, item);
    });
});
