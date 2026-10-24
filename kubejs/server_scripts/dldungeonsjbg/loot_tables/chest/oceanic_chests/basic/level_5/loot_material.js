ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/basic/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(35).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(45).quality(1).count([2, 8]);
            pool.addEmpty(20);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
