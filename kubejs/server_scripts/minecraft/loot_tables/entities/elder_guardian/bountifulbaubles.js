ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:elder_guardian", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addItem("bountifulbaubles:vitamins").weight(1).count(1);
        });
    });
});
