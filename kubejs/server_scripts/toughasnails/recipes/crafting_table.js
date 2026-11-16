ServerEvents.recipes(event =>
{
    const _this = id => "toughasnails:" + id;
    const _create = id => "create:" + id;
    const _mc = id => "minecraft:" + id;
    const _boss = id => "block_factorys_bosses:" + id;
    const _tp_toug = id => "tp_toughasnails:" + id;

    event.remove({
        output: [
            _this("ice_cream"),
            _this("charc_os"),
            _this("thermoregulator"),
            _this("rain_collector"),
            _this("water_purifier")
        ]
    });

    // 米饭
    event.recipes.kubejs.shaped({ item: _this("ice_cream"), count: 2 }, [
        [_create("wheat_flour"), _mc("ice"), _create("wheat_flour")],
        [_mc("ice"), _mc("sugar"), _mc("ice")],
        [_mc("bowl"), _mc("sugar"), _mc("bowl")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("charc_os"), count: 2 }, [
        [_create("wheat_flour"), _mc("blaze_powder"), _create("wheat_flour")],
        [_mc("blaze_powder"), _mc("sugar"), _mc("blaze_powder")],
        [_mc("bowl"), _mc("sugar"), _mc("bowl")]
    ]);

    // 调温器
    event.shaped(_this("thermoregulator"), [
        [_create("industrial_iron_block"), _mc("copper_ingot"), _create("industrial_iron_block")],
        [_mc("copper_ingot"), _create("encased_fan"), _mc("copper_ingot")],
        [_create("industrial_iron_block"), _mc("copper_ingot"), _create("industrial_iron_block")]
    ]);

    // 雨水收集器
    event.shaped(_this("rain_collector"), [
        ["#minecraft:planks", _boss("net"), "#minecraft:planks"],
        ["#minecraft:planks", _tp_toug("charcoal_filter"), "#minecraft:planks"],
        ["#minecraft:planks", _mc("cauldron"), "#minecraft:planks"]
    ]);

    // 净水器
    event.shaped(_this("water_purifier"), [
        [_mc("glass"), _mc("copper_ingot"), _mc("glass")],
        [_mc("copper_ingot"), _tp_toug("charcoal_filter"), _mc("copper_ingot")],
        ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"]
    ]);

    // 温度计
    event.replaceInput(_this("temperature_gauge"), _mc("brick_slab"), _create("copper_shingle_slab"));
    event.replaceInput(_this("thermometer"), _mc("redstone"), _mc("compass"));
});
