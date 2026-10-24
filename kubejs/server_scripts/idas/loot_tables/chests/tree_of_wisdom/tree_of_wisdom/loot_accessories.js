ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tree_of_wisdom/tree_of_wisdom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(3).quality(1).count(1);
            pool.addEmpty(97);
        });
    });
});
