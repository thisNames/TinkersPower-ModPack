ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(2).count(1);
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(93);
        });
    });
});
