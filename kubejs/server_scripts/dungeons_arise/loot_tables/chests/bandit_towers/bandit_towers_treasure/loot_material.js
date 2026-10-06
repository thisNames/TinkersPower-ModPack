ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:bandit_towers/bandit_towers_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(10).count([1, 2]);
            pool.addTag("acs:m2", true).weight(40).count([1, 3]);
            pool.addEmpty(50);
            
            pool.rolls = 3;
        });
    });
});
