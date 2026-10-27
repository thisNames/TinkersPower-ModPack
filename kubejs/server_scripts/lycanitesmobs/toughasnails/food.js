ServerEvents.tags("item", event =>
{
    const _this = id => "lycanitesmobs:" + id;

    const cool_food = "toughasnails:cooling_consumed_items";
    const hot_food = "toughasnails:heating_consumed_items";


    // 冷食
    [
        _this("pale_soup")
    ].forEach(item =>
    {
        event.add(cool_food, item);
    });

    // 热食
    [
        _this("blood_chili"),
        _this("explorers_risotto")
    ].forEach(item =>
    {
        event.add(hot_food, item);
    });
});
