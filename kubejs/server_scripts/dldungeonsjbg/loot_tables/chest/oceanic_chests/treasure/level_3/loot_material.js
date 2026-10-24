ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/treasure/level_3", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(3).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(68).quality(1).count([2, 8]);
            pool.addEmpty(9);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
