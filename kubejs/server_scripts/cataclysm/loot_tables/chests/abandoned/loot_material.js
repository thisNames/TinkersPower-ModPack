ServerEvents.chestLootTables(event =>
{
    event.modify("cataclysm:abandoned", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([2, 6]);
            pool.addTag("acs:m2", true).weight(50).quality(1).count([2, 6]);
            pool.addEmpty(45);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
