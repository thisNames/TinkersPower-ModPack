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

    event.recipes.kubejs.shaped({ item: _this("bandage"), count: 2 }, [
        ["", "", ""],
        [_mc("string"), "#minecraft:wool", _mc("string")],
        ["", "", ""]
    ]);

    event.recipes.kubejs.shaped({ item: _this("plaster"), count: 4 }, [
        [_mc("string"), "", _mc("string")],
        ["", "#minecraft:wool", ""],
        [_mc("string"), "", _mc("string")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("morphine"), count: 2 }, [
        [_mc("fermented_spider_eye"), _mc("fermented_spider_eye"), _mc("fermented_spider_eye")],
        [_mc("fermented_spider_eye"), _mc("potion"), _mc("fermented_spider_eye")],
        [_mc("fermented_spider_eye"), _mc("fermented_spider_eye"), _mc("fermented_spider_eye")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("morphine"), count: 2 }, [
        [_mc("spider_eye"), _mc("spider_eye"), _mc("spider_eye")],
        [_mc("spider_eye"), _mc("potion"), _mc("spider_eye")],
        [_mc("spider_eye"), _mc("spider_eye"), _mc("spider_eye")]
    ]);
});
