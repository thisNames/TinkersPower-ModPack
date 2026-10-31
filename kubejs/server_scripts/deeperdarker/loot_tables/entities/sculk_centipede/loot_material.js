ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:sculk_centipede", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([1, 8]).lootingEnchant(2, 18);
            pool.addEmpty(75);
        });
    });
});
