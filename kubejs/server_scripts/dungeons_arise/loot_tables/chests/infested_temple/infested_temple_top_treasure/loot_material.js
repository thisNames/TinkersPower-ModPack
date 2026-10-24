ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:infested_temple/infested_temple_top_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(30).quality(1).count([1, 8]);
            pool.addEmpty(40);
            
            pool.rolls = 4;
            pool.bonusRolls = 1;
        });
    });
});
