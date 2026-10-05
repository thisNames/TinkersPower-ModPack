ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:shulker", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(50)
            pool.addItem("bountifulbaubles:shulker_heart")
                .weight(50)
                .count(1);
        });
    });
});
