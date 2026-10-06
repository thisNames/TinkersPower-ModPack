ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tree_of_wisdom/tree_of_wisdom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
