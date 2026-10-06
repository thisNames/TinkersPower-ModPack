ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([1, 6]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(25).count([1, 3]);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(20).count([2, 4]);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(25).count([1, 3]);
            pool.addItem("trinketsandbaubles:glowing_gem").weight(5).count([1, 2]);
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(15).count([1, 4]);
            pool.addEmpty(85);

            pool.rolls = 2;
        });
    });
});
