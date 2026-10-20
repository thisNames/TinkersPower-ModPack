ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/weak/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(50).count([2, 8]);
            pool.addEmpty(50);

            pool.rolls = 1;
        });
    });
});
