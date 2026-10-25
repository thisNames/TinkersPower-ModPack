ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/floor4_center", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(12).quality(1).count([2, 8]);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([4, 12]);
            pool.addEmpty(83);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
