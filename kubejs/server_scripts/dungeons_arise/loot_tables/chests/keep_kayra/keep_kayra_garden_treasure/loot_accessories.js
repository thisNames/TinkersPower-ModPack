ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:keep_kayra/keep_kayra_garden_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(8).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(12).quality(1).count(1);
            pool.addEmpty(80);
        });
    });
});
