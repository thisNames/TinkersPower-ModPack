ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(83).count([2, 8]);
            pool.addEmpty(17);
        });
    });
});
