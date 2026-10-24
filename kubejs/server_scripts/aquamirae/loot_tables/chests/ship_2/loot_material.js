ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:ship_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(25).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(50).quality(1).count([2, 8]);
            pool.addEmpty(25);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
