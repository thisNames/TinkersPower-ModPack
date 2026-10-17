ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:stray", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addItem("bountifulbaubles:spectral_silt").weight(10).count(1);

            pool.addItem("xat:glowing_powder").weight(5).count(1);
            pool.addItem("xat:glowing_ingot").weight(2).count(1);
            pool.addEmpty(83);
        });
    });
});
