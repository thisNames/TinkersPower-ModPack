ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:husk", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(80);
            pool.addItem("bountifulbaubles:apple")
                .weight(20)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.apple"));
        });
    });
});
