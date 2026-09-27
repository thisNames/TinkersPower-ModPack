ServerEvents.tags("item", event =>
{
    const _this = id => "tide:" + id;

    const hot_food = "toughasnails:heating_consumed_items";

    // 热食
    [
        _this("midas_fish")
    ].forEach(item =>
    {
        event.add(hot_food, item);
    });
});
