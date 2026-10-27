// priority: 2000

/**
 * 罪恶食物标签
 * @type {string}
 */
const sinful_foods_tag = "acs:sinful_food";

/**
 * 暴食吊坠
 * @type {string}
 */
const sinful_curios_id = "bountifulbaubles:gluttony_pendant";

/**
 * 罪恶效果
 * @type {string}
 */
const sinful_curios_effect = "bountifulbaubles:sinful";

/**
 * 罪恶食物集合
 * @type {Array<ServerSinfulFoodType>}
 */
const sinful_foods_list = [
    alexscaves_sinful_foods,
    alexsmobs_sinful_foods,
    aquamirae_sinful_foods,
    iceandfire_sinful_foods,
    minecraft_sinful_foods,
    tconstruct_sinful_foods,
    tide_sinful_foods,
    twilightforest_sinful_foods,
    xat_sinful_foods,
    lycanitesmobs_sinful_foods
];

// 食物监听
sinful_foods_list.forEach(sinful =>
{
    sinful.foods.forEach(food =>
    {
        const food_id = sinful.namespace + ":" + food.id;

        ItemEvents.foodEaten(food_id, event =>
        {
            const player = event.getPlayer();

            if (player && player.isCuriosEquipped(sinful_curios_id))
            {
                player.potionEffects.add(sinful_curios_effect, food.second * 20, food.amplifier);
            }
        });
    });
});

// 标签分类
ServerEvents.tags("item", event =>
{
    sinful_foods_list.forEach(sinful =>
    {
        sinful.foods.forEach(food =>
        {
            const food_id = sinful.namespace + ":" + food.id;

            event.add(sinful_foods_tag, food_id);
        });
    });
});
