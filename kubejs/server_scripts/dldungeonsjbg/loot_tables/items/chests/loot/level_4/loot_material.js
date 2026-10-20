ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/loot/level_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(20).count([2, 6]);
            pool.addTag("acs:m3", true).weight(40).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 3;
        });
    });
});
