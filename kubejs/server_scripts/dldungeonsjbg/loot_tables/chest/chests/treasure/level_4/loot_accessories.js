ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure/level_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(6).count(1);
            pool.addTag("acs:l3", true).weight(14).count(1);
            pool.addEmpty(80);
        });
    });
});
