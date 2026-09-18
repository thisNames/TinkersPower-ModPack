ServerEvents.recipes(event =>
{
    const _this = id => "potionrings2:" + id;
    const _quark = id => "quark:" + id;
    const _minecraft = id => "minecraft:" + id;

    event.remove({
        output: [
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:regeneration\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:jump_boost\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:haste\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:health_boost\"}").weakNBT(),
            Item.of(_this("potion_ring"), "{Effect:\"minecraft:resistance\"}").weakNBT()
        ]
    });

    event.shaped(Item.of(_this("potion_ring"), "{Effect:\"minecraft:resistance\"}"), [
        [_quark("diamond_heart"), _minecraft("diamond"), ""],
        [_minecraft("diamond"), _this("potion_ring"), _minecraft("diamond")],
        ["", _minecraft("diamond"), ""],
    ]);
});
