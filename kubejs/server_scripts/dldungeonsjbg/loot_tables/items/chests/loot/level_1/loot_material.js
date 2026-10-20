ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/loot/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(25).count([2, 8]);
            pool.addEmpty(75);
        });
    });
});
