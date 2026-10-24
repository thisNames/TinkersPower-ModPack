ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/gear/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(4).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(6).quality(1).count(1);
            pool.addEmpty(90);
        });
    });
});
