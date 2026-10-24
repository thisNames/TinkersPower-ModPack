ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:bandit_towers/bandit_towers_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(40).quality(1).count([1, 3]);
            pool.addEmpty(50);
            
            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
