ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("graveyard:lich", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(50).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(20).count([2, 8]).lootingEnchant(2, 8);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 4]).lootingEnchant(1, 8);
            pool.addEmpty(85);
        });
    });
});
