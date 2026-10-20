ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/special", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(8).count([1, 2]);
            pool.addTag("acs:m2", true).weight(32).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).count([2, 8]);
            pool.addEmpty(30);

            pool.rolls = 3;
        });
    });
});
