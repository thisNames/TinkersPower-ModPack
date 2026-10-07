ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:stray", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:ring_overclocking")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.ring_overclocking"));
        });
    });
});
