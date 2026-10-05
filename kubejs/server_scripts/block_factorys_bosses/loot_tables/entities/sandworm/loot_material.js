ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("block_factorys_bosses:sandworm", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(50).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(20).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(5).count([1, 3]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_gem").weight(5).count([1, 2]).lootingEnchant(2, 8);

            pool.rolls = 4;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(30).count([2, 6]).lootingEnchant(1, 8);
            pool.addTag("acs:m2", true).weight(20).count([2, 4]).lootingEnchant(1, 8);
            pool.addTag("acs:m1", true).weight(50).count([2, 6]).lootingEnchant(1, 8);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(25).count(1);
            pool.addTag("acs:l3", true).weight(75).count(1);
        });
    });
});
