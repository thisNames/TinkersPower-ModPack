ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("minecraft:spawner", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("create:experience_nugget").weight(1).count([2, 8]);

            pool.rolls = 3;
        });
    });
});
