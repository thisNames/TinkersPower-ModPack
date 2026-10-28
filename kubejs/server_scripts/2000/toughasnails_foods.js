// priority: 2000

/**
 * 坚定意志：热食标签
 * @type {string}
 */
const toughasnails_hot_food_tag = "toughasnails:heating_consumed_items";

/**
 * 坚定意志：冷食标签
 * @type {string}
 */
const toughasnails_cool_food_tag = "toughasnails:cooling_consumed_items";

/**
 * 坚定意志：食物集合（内置温度）
 * @type {Array<TDServerToughasnailsFood>}
 */
const toughasnails_foods_list = [

];


// 添加标签
ServerEvents.tags("item", event =>
{
    toughasnails_foods_list.forEach(mod =>
    {
        mod.foods.forEach(food =>
        {
            const id = nToiServer(mod.namespace, food.id);
            
            event.add(food.isHot ? toughasnails_hot_food_tag : toughasnails_cool_food_tag, id);
        });
    });
});
