ServerEvents.chestLootTables(event =>
{
    event.modify("alexscaves:underground_cabin_forlorn_hollows", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(70).quality(1).count([2, 8]);
            pool.addEmpty(15);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
