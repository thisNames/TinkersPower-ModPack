ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(5).count([2, 4]);
            pool.addTag("acs:m3", true).weight(75).count([2, 6]);
            pool.addEmpty(20);
        });
    });
});
