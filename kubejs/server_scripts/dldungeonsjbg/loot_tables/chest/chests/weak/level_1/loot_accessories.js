ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/weak/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(6).count(1);
            pool.addEmpty(94);
        });
    });
});
