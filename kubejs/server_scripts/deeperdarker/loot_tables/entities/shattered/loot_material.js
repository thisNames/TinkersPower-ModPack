ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:shattered", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 4]).lootingEnchant(2, 18);
            pool.addEmpty(75);
        });
    });
});
