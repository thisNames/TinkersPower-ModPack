ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("graveyard:ghoul", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(10).count(1).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(5).count(1).lootingEnchant(2, 8);
            pool.addEmpty(85);
        });
    });
});
