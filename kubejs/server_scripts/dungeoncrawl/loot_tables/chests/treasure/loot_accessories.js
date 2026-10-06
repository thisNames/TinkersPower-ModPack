ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(3).count(1);
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(92);
        });
    });
});
