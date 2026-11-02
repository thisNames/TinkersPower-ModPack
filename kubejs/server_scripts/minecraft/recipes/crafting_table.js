ServerEvents.recipes(event =>
{
    const _this = id => "minecraft:" + id;
    const _create = id => "create:" + id;
    const _obs = id => "obscure_api:" + id;

    // 羊毛拆线
    event.recipes.kubejs.shapeless({ item: _this("string"), count: 4 }, ["#minecraft:wool"]);

    // 附魔瓶
    event.recipes.kubejs.shapeless({ item: _this("experience_bottle"), count: 2 }, [_mc("experience_bottle"), _obs("vial_of_knowledge")]);

    // 附魔瓶
    event.shapeless(_this("experience_bottle"), [_this("glass_bottle"), _create("experience_nugget")]);
});
