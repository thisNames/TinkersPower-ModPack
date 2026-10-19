ServerEvents.recipes(event =>
{
    const _this = id => "minecraft:" + id;

    // 羊毛拆线
    event.recipes.kubejs.shapeless({ item: _this("string"), count: 4 }, ["#minecraft:wool"]);
});
