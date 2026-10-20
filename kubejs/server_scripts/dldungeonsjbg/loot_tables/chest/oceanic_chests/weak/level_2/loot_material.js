ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/weak/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(50).count([2, 8]);
            pool.addEmpty(50);
        });
    });
});
