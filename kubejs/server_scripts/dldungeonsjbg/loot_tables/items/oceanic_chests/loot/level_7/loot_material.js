ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/oceanic_chests/loot/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(8).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(32).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(40).quality(1).count([2, 8]);
            pool.addEmpty(20);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
