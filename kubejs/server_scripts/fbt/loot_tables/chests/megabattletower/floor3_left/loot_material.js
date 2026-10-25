ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/floor3_left", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m3", true).weight(40).quality(1).count([2, 8]);
            pool.addEmpty(75);

            pool.rolls = 2
            pool.bonusRolls = 1;
        });
    });
});
