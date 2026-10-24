ServerEvents.chestLootTables(event =>
{
    event.modify("idas:train_ruins/train_ruins_create", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(8).quality(1).count([1, 6]);
            pool.addTag("acs:m3", true).weight(12).quality(1).count([1, 6]);
            pool.addEmpty(80);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
