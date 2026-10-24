ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/oceanic_chests/loot/level_3", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(45).quality(1).count([2, 8]);
            pool.addEmpty(40);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
