ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:pillager_outpost", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
