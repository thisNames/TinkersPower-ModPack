// 苹果压榨器（酿造）
ServerEvents.recipes(event =>
{
    const _this = id => "iceandfire:" + id;

    // 龙血
    vineryAppleFermenting(event, _this("fire_dragon_heart"), _this("fire_dragon_blood"), 2);
    vineryAppleFermenting(event, _this("ice_dragon_heart"), _this("ice_dragon_blood"), 2);
    vineryAppleFermenting(event, _this("lightning_dragon_heart"), _this("lightning_dragon_blood"), 2);
});
