ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(25).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).quality(1).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
