ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(8).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(12).quality(1).count(1);
            pool.addEmpty(80);
        });
    });
});
