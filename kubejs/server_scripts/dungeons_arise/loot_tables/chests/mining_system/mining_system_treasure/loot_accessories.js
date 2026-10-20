ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:mining_system/mining_system_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(9).count(1);
            pool.addTag("acs:l3", true).weight(12).count(1);
            pool.addEmpty(79);
        });
    });
});
