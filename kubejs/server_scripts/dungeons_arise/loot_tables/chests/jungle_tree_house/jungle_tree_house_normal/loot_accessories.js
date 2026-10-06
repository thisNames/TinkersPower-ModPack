ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:jungle_tree_house/jungle_tree_house_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
