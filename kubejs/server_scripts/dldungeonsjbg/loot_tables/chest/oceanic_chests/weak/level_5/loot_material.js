ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/weak/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(10).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(20).quality(1).count([2, 8]);
            pool.addEmpty(70);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
