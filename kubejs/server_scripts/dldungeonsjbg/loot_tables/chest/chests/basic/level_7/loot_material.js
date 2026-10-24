ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(35).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).quality(1).count([2, 8]);
            pool.addEmpty(30);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
