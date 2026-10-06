ServerEvents.recipes(event =>
{
    const _this = id => "firstaid:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("bandage"),
            _this("plaster"),
            _this("morphine")
        ]
    });

    event.recipes.kubejs.shaped(_this("bandage"), [
        ["", "", ""],
        [_mc("string"), "#minecraft:wool", _mc("string")],
        ["", "", ""]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(2);

        return output;
    });

    event.recipes.kubejs.shaped(_this("plaster"), [
        [_mc("string"), "", _mc("string")],
        ["", "#minecraft:wool", ""],
        [_mc("string"), "", _mc("string")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(4);

        return output;
    });

    event.recipes.kubejs.shaped(_this("morphine"), [
        [_mc("fermented_spider_eye"), _mc("fermented_spider_eye"), _mc("fermented_spider_eye")],
        [_mc("fermented_spider_eye"), _mc("potion"), _mc("fermented_spider_eye")],
        [_mc("fermented_spider_eye"), _mc("fermented_spider_eye"), _mc("fermented_spider_eye")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(2);

        return output;
    });

    event.recipes.kubejs.shaped(_this("morphine"), [
        [_mc("spider_eye"), _mc("spider_eye"), _mc("spider_eye")],
        [_mc("spider_eye"), _mc("potion"), _mc("spider_eye")],
        [_mc("spider_eye"), _mc("spider_eye"), _mc("spider_eye")]
    ]).modifyResult((inputs, output) =>
    {
        output.setCount(2);

        return output;
    });
});
