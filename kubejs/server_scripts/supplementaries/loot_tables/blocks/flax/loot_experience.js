ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("supplementaries:flax", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addCondition(
                {
                    block: "supplementaries:flax",
                    condition: "minecraft:block_state_property",
                    properties: {
                        age: "7",
                        half: "lower"
                    }
                }
            );

            pool.addItem("create:experience_nugget").weight(1).count([1, 2]);
        });
    });
});
