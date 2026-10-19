/**
 * 创建一个酿造配方
 * @param {string} input 输入
 * @param {string} output 返回的物品
 * @param {number} count 数量
 */
function vineryCreateAppleFermenter(input, output, count)
{
    event.custom({
        type: "vinery:apple_fermenting",
        input: { item: input },
        wine_bottle: {
            required: true
        },
        output: { item: output, count: count }
    });
}

// 苹果压榨器（酿造）
ServerEvents.recipes(event =>
{
    const _this = id => "vinery:" + id;
    const _ice = id => "iceandfire:" + id;

    // 龙血
    vineryCreateAppleFermenter(_ice("fire_dragon_heart"), _ice("fire_dragon_blood"), 2);
    vineryCreateAppleFermenter(_ice("ice_dragon_heart"), _ice("ice_dragon_blood"), 2);
    vineryCreateAppleFermenter(_ice("lightning_dragon_heart"), _ice("lightning_dragon_blood"), 2);
});
