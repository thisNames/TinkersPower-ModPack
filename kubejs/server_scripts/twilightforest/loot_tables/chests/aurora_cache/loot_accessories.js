ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:aurora_cache", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(6).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(6).quality(1).count(1);
            pool.addEmpty(88);
        });
    });
});
