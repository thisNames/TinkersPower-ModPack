ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_galley/illager_galley_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 6]);
            pool.addEmpty(50);
            
            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
