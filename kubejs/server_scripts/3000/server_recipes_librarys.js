// priority: 3000

/**
 * 配方库
 */

// ==================== 啤酒 ====================

/**
 * 啤酒：创建一个酿造配方（啤酒桶）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {string} solt1 槽位 1
 * @param {string} solt2 槽位 2
 * @param {string} solt3 槽位 3
 * @param {string} solt4 槽位 4
 * @param {string} output 返回的物品
 */
function alcocraftplusBeerBrewing(event, solt1, solt2, solt3, solt4, output)
{
    event.custom({
        type: "alcocraftplus:beer_brewing",
        ingredients: [
            {
                item: solt1
            },
            {
                item: solt2
            },
            {
                item: solt3
            },
            {
                item: solt4
            }
        ],
        output: {
            item: output
        }
    });
}

// ==================== 葡萄酒香 ====================

/**
 * 葡萄酒香：创建一个酿造配方（苹果压榨器）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {string} input 输入
 * @param {string} output 返回的物品
 * @param {number} count 数量
 */
function vineryAppleFermenting(event, input, output, count)
{
    event.custom({
        type: "vinery:apple_fermenting",
        input: {
            item: input
        },
        wine_bottle: {
            required: true
        },
        output: {
            item: output,
            count: count
        }
    });
}

/**
 * 葡萄酒香：创建一个压榨配方（苹果压榨器）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {string} input 输入
 * @param {string} output 返回的物品
 * @param {number} count 数量
 */
function vineryAppleMashing(event, input, output, count)
{
    event.custom({
        type: "vinery:apple_mashing",
        input: {
            item: input
        },
        output: {
            item: output,
            count: count
        }
    });
}

/**
 * 葡萄酒香：创建一个酿造配方（酿造桶）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {String} solt1 第 1 个物品
 * @param {string} solt2 第 2 个物品
 * @param {string} solt3 第 3 个物品
 * @param {TEServerIceAndFireDragon} wine 葡萄汁类型
 * @param {string} output 返回的物品
 * @param {number} count 数量
 */
function vineryWineFermentation(event, solt1, solt2, solt3, wine, output, count)
{
    event.custom({
        type: "vinery:wine_fermentation",
        juice: {
            type: wine,
            amount: 25
        },
        ingredients: [
            {
                item: solt1
            },
            {
                item: solt2
            },
            {
                item: solt3
            }
        ],
        wine_bottle: {
            required: true
        },
        result: {
            item: output,
            count: count
        }
    });
}

// ==================== 冰火传说 ====================

/**
 * 冰火传说：创建龙钢锻炉配方（按物品 ID、不含 NBT）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {TEServerIceAndFireDragon} dtype 龙类型
 * @param {number} tick 烹饪时间（20 tick 为 1 秒）
 * @param {string} input 输入物品
 * @param {string} blood 血（其实是个物品即可，即第二个物品）
 * @param {string} output 输出物品
 */
function iceandfireDragonforge(event, dtype, tick, input, blood, output)
{
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: dtype,
        cook_time: tick,
        input: {
            item: input
        },
        blood: {
            item: blood
        },
        result: {
            item: output
        }
    });
}

// ==================== 机械动力 ====================

/**
 * 机械动力：滚压（辊压机+置物台、压板）
 * @param {Internal.RecipesEventJS} event 注册表对象
 * @param {string} input 输入的物品
 * @param {string} output 输出的物品
 */
function createPressing(event, input, output)
{
    event.custom({
        type: "create:pressing",
        ingredients: [
            {
                item: input
            }
        ],
        results: [
            {
                item: output
            }
        ]
    });
}
