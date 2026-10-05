ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:cave_spider", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(75);
            pool.addItem("bountifulbaubles:bezoar").weight(25).count(1);
        });
    });
});
