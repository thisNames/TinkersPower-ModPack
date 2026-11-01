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
 * 罪恶食物表
 * @type {Map<string, TServerSinfulFood>}
 */
const sinful_foods_tables = new Map();

/**
 * 罪恶食物集合
 * @type {Array<TDServerSinfulFood>}
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
    lycanitesmobs_sinful_foods,
    spore_sinful_foods
];


// 转为 map
sinful_foods_list.forEach(m => m.foods.forEach(f => sinful_foods_tables.set(nToiServer(m.namespace, f.id), f)));

// 吃监听
ItemEvents.foodEaten(event =>
{
    // 物品
    const item = event.getItem();

    // 空
    if (item.isEmpty()) return;

    // 资源
    const itemLocation = item.getIdLocation();
    const id = nToiServer(itemLocation.getNamespace(), itemLocation.getPath());
    const player = event.getPlayer();

    // 是否是表中物品
    if (!sinful_foods_tables.has(id)) return;
    // 只对玩家生效
    if (!player || !player.isLiving()) return;

    // 携带暴食吊坠
    if (player.isCuriosEquipped(sinful_curios_id))
    {
        // 获取食物
        const food = sinful_foods_tables.get(id);

        // 给予罪恶效果
        player.potionEffects.add(sinful_curios_effect, food.second * 20, food.amplifier);
    }
});

// 添加标签
ServerEvents.tags("item", event =>
{
    sinful_foods_list.forEach(sinful =>
    {
        sinful.foods.forEach(food =>
        {
            const food_id = nToiServer(sinful.namespace, food.id);

            event.add(sinful_foods_tag, food_id);
        });
    });
});
