ServerEvents.entityLootTables(event =>
{
    event.addEntity("minecraft:pig", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("minecraft:porkchop").weight(1).count([1, 3]).lootingEnchant(2, 64);
        });
    });
});
