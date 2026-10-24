ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:keep_kayra/keep_kayra_library_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(20).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 4]);
            pool.addEmpty(55);
            
            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
