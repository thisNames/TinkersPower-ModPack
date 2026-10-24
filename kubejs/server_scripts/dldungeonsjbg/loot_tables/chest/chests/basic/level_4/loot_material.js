ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(20).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(50).quality(1).count([2, 8]);
            pool.addEmpty(30);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
