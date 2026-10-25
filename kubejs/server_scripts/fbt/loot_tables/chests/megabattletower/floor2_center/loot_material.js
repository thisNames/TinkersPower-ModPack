ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/floor2_center", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 8]);
            pool.addEmpty(93);

            pool.bonusRolls = 1;
        });
    });
});
