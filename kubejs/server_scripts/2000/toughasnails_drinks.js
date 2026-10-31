// priority: 2000

/**
 * 坚定意志：饮品标签
 * @type {string}
 */
const toughasnails_drinks_tag = "toughasnails:drinks";

/**
 * 坚定意志：获得脱水 buff 概率
 * @type {Map<number, number>}
 */
const toughasnails_poison_chancer = new Map([[1, 25], [2, 50], [3, 75], [4, 100]]);

/**
 * 坚定意志：补水量标签
 * @param {number} n 补水量 1 - 20
 * @returns 
 */
const toughasnails_thirst_tag = n => `toughasnails:thirst/${Math.max(1, Math.min(20, n))}_thirst_drinks`;

/**
 * 坚定意志：湿润度标签
 * @param {string} n 湿润度 1 - 10
 * @returns 
 */
const toughasnails_hydration_tag = n => `toughasnails:hydration/${Math.max(1, Math.min(10, n)) * 10}_hydration_drinks`;

/**
 * 坚定意志：口渴概率标签
 * @param {number} p 脏水概率 1 - 4
 * @returns 
 */
const toughasnails_poison_chance_tag = p => `toughasnails:poison_chance/${toughasnails_poison_chancer.get(p) || 25}_poison_chance_drinks`;

/**
 * 坚定意志：饮品集合
 * @type {Array<TDServerToughasnailsDrink>}
 */
const toughasnails_drinks_list = [
    create_toughasnails_drinks,
    create_confectionery_toughasnails_drinks,
    railways_toughasnails_drinks,
    vinery_toughasnails_drinks,
    alcocraftplus_toughasnails_drinks
];


// 添加标签
ServerEvents.tags("item", event =>
{
    toughasnails_drinks_list.forEach(mod =>
    {
        mod.drinks.forEach(drink =>
        {
            const id = nToiServer(mod.namespace, drink.id);

            event.add(toughasnails_drinks_tag, id);
            event.add(toughasnails_thirst_tag(drink.thirst), id);
            event.add(toughasnails_hydration_tag(drink.hydration), id);

            // 脏水
            if (drink.isDirty) event.add(toughasnails_poison_chance_tag(drink.dirtyChance), id);
        });
    });
});
