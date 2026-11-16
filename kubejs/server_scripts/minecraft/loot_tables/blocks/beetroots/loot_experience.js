ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("minecraft:beetroots", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addCondition({
                block: "minecraft:beetroots",
                condition: "minecraft:block_state_property",
                properties: {
                    age: "3"
                }
            });

            pool.addItem("create:experience_nugget").weight(1).count([1, 3]);
        });
    });
});
