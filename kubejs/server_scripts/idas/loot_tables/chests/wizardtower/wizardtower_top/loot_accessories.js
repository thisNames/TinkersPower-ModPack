ServerEvents.chestLootTables(event =>
{
    event.modify("idas:wizardtower/wizardtower_top", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(6).quality(1).count(1);
            pool.addEmpty(94);
        });
    });
});
