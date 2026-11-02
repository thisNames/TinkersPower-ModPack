// 苹果压榨器（压榨）
ServerEvents.recipes(event =>
{
    const _this = id => "iceandfire:" + id;

    // 龙血
    vineryAppleMashing(event, _this("fire_dragon_flesh"), _this("fire_dragon_blood"), 1);
    vineryAppleMashing(event, _this("ice_dragon_flesh"), _this("ice_dragon_blood"), 1);
    vineryAppleMashing(event, _this("lightning_dragon_flesh"), _this("lightning_dragon_blood"), 1);
});
