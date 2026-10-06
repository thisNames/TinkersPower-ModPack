ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_windmill/illager_windmill_barrels", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(20).count([1, 2]);
            pool.addEmpty(80);
            
            pool.rolls = 2;
        });
    });
});
