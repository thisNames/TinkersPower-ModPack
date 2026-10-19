// 冰火龙炎锻造炉类型 
const iceandfireDragonForgeTypeDef = "iceandfire:dragonforge";

/**
 * 创建冰火传说龙钢锻炉配方
 * @param {string} dragonFogeType 类型（冰，火，电）
 * @param {number} tick 烹饪时间（20tick为1秒）
 * @param {string} input 输入物品
 * @param {string} blood 血（其实是个物品即可，即第二个物品）
 * @param {string} output 输出物品
 */
function iceandfireDragonforge(dragonFogeType, tick, input, blood, output)
{
    event.custom({
        type: iceandfireDragonForgeTypeDef,
        dragon_type: dragonFogeType,
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


/** 
 * 创建冰火传说龙钢锻炉配方（输入物品用tag表示）
 * @param {string} dragonFogeType 类型（冰，火，电）
 * @param {number} tick 烹饪时间（20tick为1秒）
 * @param {string} input 输入物品的tag
 * @param {string} blood 血（其实是个物品即可，即第二个物品）
 * @param {string} output 输出物品
 */
function iceandfireDragonforgeForTag(dragonFogeType, tick, input, blood, output)
{
    event.custom({
        type: iceandfireDragonForgeTypeDef,
        dragon_type: dragonFogeType,
        cook_time: tick,
        input: {
            tag: input
        },
        blood: {
            item: blood
        },
        result: {
            item: output
        }
    });
}

ServerEvents.recipes(event => 
{
    const _this = id => "iceandfire:" + id;
    const _mc = id => "minecraft:" + id;

    // 类型
    const fire = "fire";
    const ice = "ice";
    const lightning = "lightning";

    // 移除旧的
    event.remove({ type: iceandfireDragonForgeTypeDef });

    // 改用下界合金
    iceandfireDragonforge(fire, 400, _mc("netherite_ingot"), _this("fire_dragon_blood"), _this("dragonsteel_fire_ingot"));
    iceandfireDragonforge(ice, 400, _mc("netherite_ingot"), _this("ice_dragon_blood"), _this("dragonsteel_ice_ingot"));
    iceandfireDragonforge(lightning, 400, _mc("netherite_ingot"), _this("lightning_dragon_blood"), _this("dragonsteel_lightning_ingot"));
});
