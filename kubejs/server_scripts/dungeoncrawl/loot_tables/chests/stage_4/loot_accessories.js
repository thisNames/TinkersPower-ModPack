ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
