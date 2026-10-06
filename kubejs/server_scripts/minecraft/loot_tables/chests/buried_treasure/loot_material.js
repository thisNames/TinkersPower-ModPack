ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:buried_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(10).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).count([1, 3]);
            pool.addEmpty(70);

            pool.rolls = 2;
        });

        // loot.addPool(pool =>
        // {
        //     pool.addTag("acs:l2", true).weight(2).count(1);
        //     pool.addTag("acs:l3", true).weight(4).count(1);
        //     pool.addEmpty(94);
        // });

        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 8]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(50).count([2, 8]);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(20).count([2, 8]);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(6).count([1, 3]);
            pool.addItem("trinketsandbaubles:glowing_gem").weight(4).count([1, 2]);

            pool.rolls = 2;
        });
    });
});
