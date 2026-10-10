ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:lighthouse/lighthouse_top", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(3).count(1);
            pool.addEmpty(97);
        });
    });
});
