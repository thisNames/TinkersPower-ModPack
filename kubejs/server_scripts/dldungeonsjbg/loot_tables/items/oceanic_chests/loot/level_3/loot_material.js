ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/oceanic_chests/loot/level_3", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(45).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 2;
        });
    });
});
