ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("minecraft:spawner", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(1).count([1 - 2]);

            pool.rolls = 3;
        });
    });
});
