ServerEvents.chestLootTables(event =>
{
    event.modify("idas:pillager_camp/pillager_camp", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
