ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:library", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:resplendent_token").weight(25).count([1, 3]);
            pool.addEmpty(75);

            pool.rolls = 2;
        });
    });
});
