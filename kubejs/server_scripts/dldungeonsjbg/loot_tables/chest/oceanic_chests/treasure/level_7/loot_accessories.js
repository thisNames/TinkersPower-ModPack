ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/treasure/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(10).count(1);
            pool.addTag("acs:l3", true).weight(8).count(1);
            pool.addEmpty(82);
        });
    });
});
