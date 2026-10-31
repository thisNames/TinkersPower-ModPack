ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:sculk_snapper", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).count([1, 2]).lootingEnchant(2, 18);
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 6]).lootingEnchant(2, 18);
            pool.addEmpty(60);
        });
    });
});
