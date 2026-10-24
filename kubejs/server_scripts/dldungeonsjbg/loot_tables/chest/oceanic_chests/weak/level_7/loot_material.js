ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/weak/level_7", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(9).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(36).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(43).quality(1).count([2, 8]);
            pool.addEmpty(12);

            pool.rolls = 4;
            pool.bonusRolls = 1;
        });
    });
});
