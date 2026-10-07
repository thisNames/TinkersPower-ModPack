ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:cave_spider", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:bezoar").weight(12).count(1);
        });
    });
});
