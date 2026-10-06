ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:abandoned_temple/abandoned_temple_top", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
