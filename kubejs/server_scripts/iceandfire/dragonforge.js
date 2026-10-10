ServerEvents.recipes(event =>
{
    /**
     * 创建冰火传说龙钢锻炉配方
     * @param {string} dragonFogeType 类型（冰，火，电）
     * @param {number} tick 烹饪时间（20tick为1秒）
     * @param {string} input 输入物品
     * @param {string} blood 血（其实是个物品即可，即第二个物品）
     * @param {string} output 输出物品
     */
    function dragonforge(dragonFogeType, tick, input, blood, output)
    {
        event.custom({
            type: "iceandfire:dragonforge",
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
        })
    }


    /** 
     * 创建冰火传说龙钢锻炉配方（输入物品用tag表示）
     * @param {string} dragonFogeType 类型（冰，火，电）
     * @param {number} tick 烹饪时间（20tick为1秒）
     * @param {string} input 输入物品的tag
     * @param {string} blood 血（其实是个物品即可，即第二个物品）
     * @param {string} output 输出物品
     */
    function dragonforgeForTag(dragonFogeType, tick, input, blood, output)
    {
        event.custom({
            type: "iceandfire:dragonforge",
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

    // 类型
    let fire = "fire";
    let ice = "ice";
    let lightning = "lightning";

    // 移除旧的
    event.remove({ type: "iceandfire:dragonforge" });

    // 改用用下界合金
    dragonforge(fire, 400, "minecraft:netherite_ingot", "iceandfire:fire_dragon_blood", "iceandfire:dragonsteel_fire_ingot");
    dragonforge(ice, 400, "minecraft:netherite_ingot", "iceandfire:ice_dragon_blood", "iceandfire:dragonsteel_ice_ingot");
    dragonforge(lightning, 400, "minecraft:netherite_ingot", "iceandfire:lightning_dragon_blood", "iceandfire:dragonsteel_lightning_ingot");

    // 使用标签
    // dragonforgeForTag(dragonType.lightning, 400, "forge:ingots", "dummmmmmy:target_dummy", "iceandfire:dragonsteel_lightning_ingo");
});
