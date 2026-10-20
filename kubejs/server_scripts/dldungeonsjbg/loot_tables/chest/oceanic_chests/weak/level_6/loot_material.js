ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/weak/level_6", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(8).count([1, 2]);
            pool.addTag("acs:m2", true).weight(35).count([2, 6]);
            pool.addTag("acs:m3", true).weight(45).count([2, 8]);
            pool.addEmpty(12);

            pool.rolls = 3;
        });
    });
});
