ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_3", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 4]);
            pool.addTag("acs:m3", true).weight(75).count([2, 4]);
            pool.addEmpty(15);
        });
    });
});
