ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(3).count(1);
            pool.addEmpty(97);
        });
    });
});
