ServerEvents.tags("item", event =>
{
    const _this = id => "twilightforest:" + id;

    const hot_food = "toughasnails:heating_consumed_items";

    // 热食
    [
        _this("hydra_chop")
    ].forEach(item =>
    {
        event.add(hot_food, item);
    });
});
