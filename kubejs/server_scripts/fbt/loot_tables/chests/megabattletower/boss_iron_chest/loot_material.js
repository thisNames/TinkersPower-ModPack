ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/boss_iron_chest", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(2).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(5).quality(1).count([2, 8]);
            pool.addEmpty(93);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
