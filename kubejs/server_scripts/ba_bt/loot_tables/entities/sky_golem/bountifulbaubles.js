ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("ba_bt:sky_golem", loot =>
    {
        // 饰品
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.artifacts.cloud_in_a_bottle_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("artifacts:cloud_in_a_bottle")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.cloud_in_a_bottle"));
        });
    });
});
