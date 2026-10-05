ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:the_harbinger", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(20).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(40).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(15).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(20).count([1, 6]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_gem").weight(5).count([1, 4]).lootingEnchant(2, 8);

            pool.rolls = 6;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(75).count([2, 6]).lootingEnchant(1, 8);
            pool.addTag("acs:m2", true).weight(15).count([2, 4]).lootingEnchant(1, 8);
            pool.addTag("acs:m1", true).weight(10).count([2, 4]).lootingEnchant(1, 8);

            pool.rolls = 4;
        });
    });
});
