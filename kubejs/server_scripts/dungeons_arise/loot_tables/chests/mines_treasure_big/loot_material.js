ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:mines_treasure_big", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(10).count([1, 2]);
            pool.addTag("acs:m2", true).weight(10).count([1, 3]);
            pool.addTag("acs:m3", true).weight(30).count([1, 8]);
            pool.addEmpty(50);
            
            pool.rolls = 4;
        });
    });
});
