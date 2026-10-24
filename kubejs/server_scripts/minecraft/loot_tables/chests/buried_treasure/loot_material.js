ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:buried_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(3).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(8).quality(1).count([1, 6]);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([2, 8]);
            pool.addEmpty(74);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
