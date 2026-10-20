ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/loot/level_6", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(9).count([1, 2]);
            pool.addTag("acs:m2", true).weight(36).count([2, 6]);
            pool.addTag("acs:m3", true).weight(43).count([2, 8]);
            pool.addEmpty(12);

            pool.rolls = 3;
        });
    });
});
