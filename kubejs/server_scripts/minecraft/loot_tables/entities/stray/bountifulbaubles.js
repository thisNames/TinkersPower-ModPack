ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:stray", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(70);
            pool.addItem("bountifulbaubles:ring_overclocking")
                .weight(30)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.ring_overclocking"));
        });
    });
});
