ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(3).count(1);
            pool.addTag("acs:l3", true).weight(6).count(1);
            pool.addEmpty(91);
        });
    });
});
