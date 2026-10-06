ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(75).count([2, 4]);
            pool.addEmpty(25);
        });
    });
});
