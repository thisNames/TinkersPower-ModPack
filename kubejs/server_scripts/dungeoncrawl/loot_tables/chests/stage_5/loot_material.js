ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).quality(1).count([1, 6]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).quality(1).count([1, 3]);
            pool.addEmpty(60);

            pool.bonusRolls = 1;
        });

        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([2, 4]);
            pool.addTag("acs:m2", true).weight(55).quality(1).count([2, 4]);
            pool.addEmpty(40);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
