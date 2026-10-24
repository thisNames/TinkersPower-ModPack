ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/treasure/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(40).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(20).quality(1).count([2, 8]);
            pool.addEmpty(30);

            pool.rolls = 4;
            pool.bonusRolls = 1;
        });
    });
});
