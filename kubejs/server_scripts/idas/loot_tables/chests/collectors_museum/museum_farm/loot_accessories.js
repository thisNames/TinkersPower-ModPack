ServerEvents.chestLootTables(event =>
{
    event.modify("idas:collectors_museum/museum_farm", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
