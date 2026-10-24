ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure_boss/level_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(35).quality(1).count([2, 6]);
            pool.addEmpty(60);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
