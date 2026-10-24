ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/loot/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(30).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).quality(1).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
