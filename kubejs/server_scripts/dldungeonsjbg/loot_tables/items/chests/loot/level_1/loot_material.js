ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:items/chests/loot/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([2, 8]);
            pool.addEmpty(75);

            pool.bonusRolls = 1;
        });
    });
});
