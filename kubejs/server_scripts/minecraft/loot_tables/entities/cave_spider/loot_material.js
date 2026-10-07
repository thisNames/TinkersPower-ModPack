ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:cave_spider", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addItem("bountifulbaubles:spectral_silt").weight(10).count(1);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(5).count(1);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(2).count(1);
            pool.addEmpty(83);
        });
    });
});
