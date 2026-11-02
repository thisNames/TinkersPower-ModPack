// 锻造炉
ServerEvents.recipes(event => 
{
    const _this = id => "iceandfire:" + id;
    const _mc = id => "minecraft:" + id;

    // 移除旧的
    event.remove({ type: "iceandfire:dragonforge" });

    // 改用下界合金
    iceandfireDragonforge(event, "fire", 400, _mc("netherite_ingot"), _this("fire_dragon_blood"), _this("dragonsteel_fire_ingot"));
    iceandfireDragonforge(event, "fire", 400, _mc("netherite_ingot"), _this("ice_dragon_blood"), _this("dragonsteel_ice_ingot"));
    iceandfireDragonforge(event, "lightning", 400, _mc("netherite_ingot"), _this("lightning_dragon_blood"), _this("dragonsteel_lightning_ingot"));
});
