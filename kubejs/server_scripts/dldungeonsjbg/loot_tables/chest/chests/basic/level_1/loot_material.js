ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/basic/level_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(83).quality(1).count([2, 8]);
            pool.addEmpty(17);

            pool.bonusRolls = 1;
        });
    });
});
