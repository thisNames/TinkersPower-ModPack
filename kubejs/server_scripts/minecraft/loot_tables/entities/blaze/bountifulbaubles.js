ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:blaze", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(94);
            pool.addItem("bountifulbaubles:blaze_heart").weight(6).count(1);
        });
    });
});
