ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/basic/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(35).count([2, 6]);
            pool.addTag("acs:m3", true).weight(45).count([2, 8]);
            pool.addEmpty(20);

            pool.rolls = 2;
        });
    });
});
