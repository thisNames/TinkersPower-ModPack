ServerEvents.recipes(event =>
{
    const _this = id => "potionrings2:" + id;
    const _quark = id => "quark:" + id;
    const _ice = id => "iceandfire:" + id;
    const _bount = id => "bountifulbaubles:" + id;
    const _twi = id => "twilightforest:" + id;
    const _trinke = id => "trinketsandbaubles:" + id;
    const _minecraft = id => "minecraft:" + id;

    event.remove({
        output: [
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:regeneration\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:jump_boost\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:haste\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:health_boost\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:resistance\"}").weakNBT(),
        ]
    });

    event.replaceInput({ output: _this("potion_ring") }, _minecraft("lapis_block"), _ice("silver_block"));

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:regeneration\"}"), [
        [_ice("hydra_heart"), _minecraft("ghast_tear"), ""],
        [_minecraft("ghast_tear"), _this("potion_ring"), _minecraft("ghast_tear")],
        ["", _minecraft("ghast_tear"), ""],
    ]);

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:jump_boost\"}"), [
        [_minecraft("rabbit_foot"), _minecraft("slime_block"), ""],
        [_minecraft("slime_block"), _this("potion_ring"), _minecraft("slime_block")],
        ["", _minecraft("slime_block"), ""],
    ]);

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:haste\"}"), [
        [_minecraft("golden_apple"), _bount("spectral_silt"), ""],
        [_bount("spectral_silt"), _this("potion_ring"), _bount("spectral_silt")],
        ["", _bount("spectral_silt"), ""],
    ]);

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:health_boost\"}"), [
        [_twi("charm_of_life_2"), _trinke("glowing_ingot"), ""],
        [_trinke("glowing_ingot"), _this("potion_ring"), _trinke("glowing_ingot")],
        ["", _trinke("glowing_ingot"), ""],
    ]);

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:resistance\"}"), [
        [_quark("diamond_heart"), _minecraft("diamond"), ""],
        [_minecraft("diamond"), _this("potion_ring"), _minecraft("diamond")],
        ["", _minecraft("diamond"), ""],
    ]);
});
