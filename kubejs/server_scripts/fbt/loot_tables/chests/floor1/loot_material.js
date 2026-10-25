ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:floor1", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 2]);
            pool.addEmpty(75);

            pool.bonusRolls = 1;
        });
    });
});
