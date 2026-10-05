ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:warden", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(85);
            pool.addItem("bountifulbaubles:sunglasses")
                .weight(15)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.sunglasses"));
        });
    });
});
