/**
 * 创建一个压榨配方
 * @param {string} input 输入
 * @param {string} output 返回的物品
 * @param {number} count 数量
 */
function vineryCreateAppleMashing(input, output, count)
{
    event.custom({
        type: "vinery:apple_mashing",
        input: { item: input },
        output: { item: output, count: count }
    });
}

// 苹果压榨器（压榨）
ServerEvents.recipes(event =>
{
    const _this = id => "vinery:" + id;
    const _ice = id => "iceandfire:" + id;

    // 龙血
    vineryCreateAppleMashing(_ice("fire_dragon_flesh"), _ice("fire_dragon_blood"), 1);
    vineryCreateAppleMashing(_ice("ice_dragon_flesh"), _ice("ice_dragon_blood"), 1);
    vineryCreateAppleMashing(_ice("lightning_dragon_flesh"), _ice("lightning_dragon_blood"), 1);
});
