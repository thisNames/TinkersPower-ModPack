ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/oceanic_chests/basic/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([2, 8]);
            pool.addEmpty(75);

            pool.rolls = 1;
            pool.bonusRolls = 1;
        });
    });
});
