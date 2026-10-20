ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/weak/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(30).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 2;
        });
    });
});
