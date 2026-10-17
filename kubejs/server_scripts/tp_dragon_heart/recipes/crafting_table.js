ServerEvents.recipes(event =>
{
    const _this = id => "tp_dragon_heart:" + id;
    const _tinket = id => "xat:" + id;
    const _ice = id => "iceandfire:" + id;

    // 火龙之心
    event.shaped(_this("dragons_heart_fire"), [
        [_ice("fire_dragon_blood"), Item.of('minecraft:potion', "{Potion:\"minecraft:regeneration\"}").weakNBT(), _ice("fire_dragon_blood")],
        [_tinket("glowing_gem"), _ice("fire_dragon_heart"), _tinket("glowing_gem")],
        [_ice("fire_dragon_blood"), _ice("fire_lily"), _ice("fire_dragon_blood")]
    ]);

    // 冰龙之心
    event.shaped(_this("dragons_heart_ice"), [
        [_ice("ice_dragon_blood"), Item.of('minecraft:potion', "{Potion:\"minecraft:regeneration\"}").weakNBT(), _ice("ice_dragon_blood")],
        [_tinket("glowing_gem"), _ice("ice_dragon_heart"), _tinket("glowing_gem")],
        [_ice("ice_dragon_blood"), _ice("fire_lily"), _ice("ice_dragon_blood")]
    ]);

    // 电龙之心
    event.shaped(_this("dragons_heart_lightning"), [
        [_ice("lightning_dragon_blood"), Item.of('minecraft:potion', "{Potion:\"minecraft:regeneration\"}").weakNBT(), _ice("lightning_dragon_blood")],
        [_tinket("glowing_gem"), _ice("lightning_dragon_heart"), _tinket("glowing_gem")],
        [_ice("lightning_dragon_blood"), _ice("fire_lily"), _ice("lightning_dragon_blood")]
    ]);
});
