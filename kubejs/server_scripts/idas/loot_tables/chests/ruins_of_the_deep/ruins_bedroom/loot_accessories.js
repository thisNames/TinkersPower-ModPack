ServerEvents.chestLootTables(event =>
{
    event.modify("idas:ruins_of_the_deep/ruins_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
