ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:library", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:resplendent_token").weight(25).quality(1).count([1, 3]);
            pool.addEmpty(75);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
