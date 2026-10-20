ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(8).count([1, 2]);
            pool.addTag("acs:m2", true).weight(12).count([2, 6]);
            pool.addTag("acs:m3", true).weight(40).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 3;
        });
    });
});
