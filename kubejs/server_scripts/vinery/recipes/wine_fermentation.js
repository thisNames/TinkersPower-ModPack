/** @typedef {"red" | "white" | "red_taiga" | "white_taiga" | "red_jungle" | "white_jungle" | "red_savanna" | "white_savanna"} VineryWineType 葡萄汁类型 */

/**
  * 创建一个酿造配方
  * @param {Internal.RecipesEventJS} event 注册表对象
  * @param {String} solt1 第 1 个物品
  * @param {string} solt2 第 2 个物品
  * @param {string} solt3 第 3 个物品
  * @param {VineryWineType} wine 葡萄汁类型
  * @param {string} output 返回的物品
  * @param {number} count 数量
  */
function vineryCreateWineFermenter(event, solt1, solt2, solt3, wine, output, count)
{
    event.custom({
        type: "vinery:wine_fermentation",
        juice: { type: wine, amount: 25 },
        ingredients: [{ item: solt1 }, { item: solt2 }, { item: solt3 }],
        wine_bottle: { required: true },
        result: { item: output, count: count }
    });
}

// 酿造桶（酿造）
ServerEvents.recipes(event =>
{
    const _this = id => "vinery:" + id;
});
