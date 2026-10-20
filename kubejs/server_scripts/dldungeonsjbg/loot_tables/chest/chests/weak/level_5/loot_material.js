ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/weak/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(65).count([2, 8]);
            pool.addEmpty(20);

            pool.rolls = 3;
        });
    });
});
