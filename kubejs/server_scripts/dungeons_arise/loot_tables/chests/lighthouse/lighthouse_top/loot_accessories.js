ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:lighthouse/lighthouse_top", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(7).quality(1).count(1);
            pool.addEmpty(93);
        });
    });
});
