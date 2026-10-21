ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:ceryneian_hind/ceryneian_hind_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(5).count(1);
            pool.addTag("acs:l3", true).weight(8).count(1);
            pool.addEmpty(87);
        });
    });
});
