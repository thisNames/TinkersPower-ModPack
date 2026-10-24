ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_windmill/illager_windmill_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(6).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(8).quality(1).count(1);
            pool.addEmpty(86);
        });
    });
});
