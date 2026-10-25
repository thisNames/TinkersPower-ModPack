ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/floor5_center", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([2, 8]);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([4, 12]);
            pool.addEmpty(55);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
