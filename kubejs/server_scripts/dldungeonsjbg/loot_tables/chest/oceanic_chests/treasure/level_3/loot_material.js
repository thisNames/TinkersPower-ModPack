ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/treasure/level_3", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(3).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).count([2, 6]);
            pool.addTag("acs:m3", true).weight(68).count([2, 8]);
            pool.addEmpty(9);

            pool.rolls = 3;
        });
    });
});
