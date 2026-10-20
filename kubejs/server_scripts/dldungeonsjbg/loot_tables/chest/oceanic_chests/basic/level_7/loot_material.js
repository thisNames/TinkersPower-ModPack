ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/basic/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(30).count([2, 6]);
            pool.addTag("acs:m3", true).weight(20).count([2, 8]);
            pool.addEmpty(50);

            pool.rolls = 3;
        });
    });
});
