ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("minecraft:carrots", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addCondition({
                block: "minecraft:carrots",
                condition: "minecraft:block_state_property",
                properties: {
                    age: "7"
                }
            });

            pool.addItem("create:experience_nugget").weight(1).count([1, 2]);
        });
    });
});
