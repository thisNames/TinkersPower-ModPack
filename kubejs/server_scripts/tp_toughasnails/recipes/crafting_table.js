ServerEvents.recipes(event =>
{
    const _this = id => "tp_toughasnails:" + id;
    const _mc = id => "minecraft:" + id;
    const _tog = id => "toughasnails:" + id;

    // 活性炭过滤器
    event.recipes.kubejs.shaped(_this("charcoal_filter"), [
        [_mc("paper"), _mc("paper"), _mc("paper")],
        [_mc("charcoal"), _mc("charcoal"), _mc("charcoal")],
        [_mc("paper"), _mc("paper"), _mc("paper")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(3);
        return output;
    });

    // 纯净水瓶
    event.recipes.kubejs.shapeless(_tog("purified_water_bottle"), [_this("charcoal_filter"), _mc("potion")]);
});
