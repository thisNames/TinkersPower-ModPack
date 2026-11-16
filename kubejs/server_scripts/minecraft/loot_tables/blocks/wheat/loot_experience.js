ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("minecraft:wheat", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addCondition({
                block: "minecraft:wheat",
                condition: "minecraft:block_state_property",
                properties: {
                    age: "7"
                }
            });

            pool.addItem("create:experience_nugget").weight(1).count([1, 3]);
        });
    });
});
