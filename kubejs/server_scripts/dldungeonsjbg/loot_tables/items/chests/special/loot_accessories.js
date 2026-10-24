ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/special", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(3).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(3).quality(1).count(1);
            pool.addEmpty(94);
        });
    });
});
