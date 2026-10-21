ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(8).count(1);
            pool.addTag("acs:l3", true).weight(12).count(1);
            pool.addEmpty(80);
        });
    });
});
