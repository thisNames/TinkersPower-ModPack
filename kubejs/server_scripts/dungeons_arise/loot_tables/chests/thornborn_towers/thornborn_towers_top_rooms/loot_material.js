ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:thornborn_towers/thornborn_towers_top_rooms", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(20).count([1, 3]);
            pool.addTag("acs:m3", true).weight(25).count([1, 4]);
            pool.addEmpty(55);
            
            pool.rolls = 3;
        });
    });
});
