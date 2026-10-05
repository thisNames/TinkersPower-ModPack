ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:wither", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(96)
            pool.addItem("trinketsandbaubles:wither_ring")
                .weight(4)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.trinketsandbaubles.wither_ring"));
        });
    });
});
