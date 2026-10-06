ServerEvents.chestLootTables(event =>
{
    event.modify("idas:farmhouse/farmhouse_mill", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
