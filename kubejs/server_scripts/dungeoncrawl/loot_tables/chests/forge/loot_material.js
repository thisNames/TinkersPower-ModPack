ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:forge", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(5).count([1, 2]);
            pool.addTag("acs:m3", true).weight(70).count([1, 2]);
            pool.addEmpty(25);
        });
    });
});
