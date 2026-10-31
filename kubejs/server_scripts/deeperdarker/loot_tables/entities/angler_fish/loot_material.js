ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:angler_fish", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:spectral_silt").weight(15).count(1).lootingEnchant(2, 18);
            pool.addEmpty(85);
        });
    });
});
