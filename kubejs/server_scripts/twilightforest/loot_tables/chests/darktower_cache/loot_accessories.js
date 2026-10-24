ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:darktower_cache", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(2).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(4).quality(1).count(1);
            pool.addEmpty(94);
        });
    });
});
