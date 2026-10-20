ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/oceanic_chests/gear/level_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(4).count(1);
            pool.addTag("acs:l3", true).weight(6).count(1);
            pool.addEmpty(90);
        });
    });
});
