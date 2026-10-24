ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:bandit_towers/bandit_towers_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(2).quality(1).count(1);
            pool.addEmpty(98);
        });
    });
});
