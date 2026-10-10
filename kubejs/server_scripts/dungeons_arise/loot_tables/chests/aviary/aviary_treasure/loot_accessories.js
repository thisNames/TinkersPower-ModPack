ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:aviary/aviary_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(15).count(1);
            pool.addTag("acs:l3", true).weight(10).count(1);
            pool.addEmpty(75);
        });
    });
});
