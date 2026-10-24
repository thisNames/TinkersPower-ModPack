ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:keep_kayra/keep_kayra_garden_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(4).quality(1).count(1);
            pool.addEmpty(96);
        });
    });
});
