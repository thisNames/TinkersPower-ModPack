ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:megabattletower/floor1_right", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([1, 6]);
            pool.addEmpty(95);

            pool.bonusRolls = 1;
        });
    });
});
