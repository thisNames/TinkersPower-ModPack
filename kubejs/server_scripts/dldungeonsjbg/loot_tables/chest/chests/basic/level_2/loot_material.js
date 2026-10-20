ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(70).count([2, 8]);
            pool.addEmpty(15);

            pool.rolls = 2;
        });
    });
});
