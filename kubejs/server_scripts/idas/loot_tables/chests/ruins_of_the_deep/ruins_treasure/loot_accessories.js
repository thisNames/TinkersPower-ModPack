ServerEvents.chestLootTables(event =>
{
    event.modify("idas:ruins_of_the_deep/ruins_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(7).quality(1).count(1);
            pool.addEmpty(93);
        });
    });
});
