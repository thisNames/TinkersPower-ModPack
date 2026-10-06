ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_windmill/illager_windmill_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(10).count([1, 2]);
            pool.addTag("acs:m2", true).weight(15).count([1, 3]);
            pool.addTag("acs:m3", true).weight(25).count([1, 6]);
            pool.addEmpty(50);
            
            pool.rolls = 3;
        });
    });
});
