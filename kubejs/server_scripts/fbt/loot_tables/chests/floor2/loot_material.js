ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:floor2", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 4]);
            pool.addEmpty(75);

            pool.bonusRolls = 1;
        });
    });
});
