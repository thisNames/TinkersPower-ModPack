ServerEvents.recipes(event =>
{
    const _this = id => "minecraft:" + id;
    const _create = id => "create:" + id;
    const _obs = id => "obscure_api:" + id;

    // 羊毛拆线
    event.recipes.kubejs.shapeless({ item: _this("string"), count: 4 }, ["#minecraft:wool"]);

    // 附魔瓶
    event.recipes.kubejs.shapeless({ item: _this("experience_bottle"), count: 2 }, [
        _this("gold_nugget"),
        _obs("vial_of_knowledge"),
        _this("experience_bottle")
    ]);

    // 附魔瓶
    event.shapeless(_this("experience_bottle"), [
        _this("gold_nugget"),
        _create("experience_nugget"),
        _this("glass_bottle")
    ]);

    // 鞍
    event.shaped(_this("saddle"), [
        [_this("string"), _this("iron_ingot"), _this("string")],
        [_this("leather"), _this("leather"), _this("leather")],
        [_this("string"), _this("iron_ingot"), _this("string")]
    ]);
});
