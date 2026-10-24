ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:frozen_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:m1", true).weight(25).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(75).quality(1).count([2, 6]);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
