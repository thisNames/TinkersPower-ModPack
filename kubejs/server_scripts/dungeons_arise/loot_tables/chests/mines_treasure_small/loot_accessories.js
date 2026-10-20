ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:mines_treasure_small", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(9).count(1);
            pool.addTag("acs:l3", true).weight(11).count(1);
            pool.addEmpty(80);
        });
    });
});
