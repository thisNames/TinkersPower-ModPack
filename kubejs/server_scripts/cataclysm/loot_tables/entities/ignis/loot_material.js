ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ignis", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("cataclysm:ignitium_ingot").weight(1).count([1, 9]).lootingEnchant(2, 32);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(20).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(40).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("xat:glowing_powder").weight(15).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("xat:glowing_ingot").weight(20).count([1, 6]).lootingEnchant(2, 8);
            pool.addItem("xat:glowing_gem").weight(5).count([1, 4]).lootingEnchant(2, 8);

            pool.rolls = 5;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(90).count([2, 6]).lootingEnchant(1, 8);
            pool.addTag("acs:m2", true).weight(10).count([2, 4]).lootingEnchant(1, 8);

            pool.rolls = 3;
        });
    });
});
