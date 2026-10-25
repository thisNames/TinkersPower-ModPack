ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:floor9", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(8).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(52).quality(1).count([2, 6]);
            pool.addEmpty(40);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
