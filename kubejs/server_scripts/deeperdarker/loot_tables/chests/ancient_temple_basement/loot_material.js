ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_basement", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(10).quality(1).count([1, 6]);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 8]);
            pool.addEmpty(60)

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
