ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:jungle_tree_house/jungle_tree_house_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(5).count(1);
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(90);
        });
    });
});
