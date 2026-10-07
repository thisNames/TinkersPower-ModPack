ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:husk", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:apple")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.apple"));
        });
    });
});
