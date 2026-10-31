ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:shriek_worm", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).count([1, 6]).lootingEnchant(2, 18);
            pool.addItem("bountifulbaubles:spectral_silt").weight(35).count([2, 8]).lootingEnchant(2, 18);
            pool.addEmpty(50);

            pool.rolls = 2;
        });
    });
});
