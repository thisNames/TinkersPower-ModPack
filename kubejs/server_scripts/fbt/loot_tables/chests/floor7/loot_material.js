ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:floor7", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m3", true).weight(40).quality(1).count([2, 6]);
            pool.addEmpty(55);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
