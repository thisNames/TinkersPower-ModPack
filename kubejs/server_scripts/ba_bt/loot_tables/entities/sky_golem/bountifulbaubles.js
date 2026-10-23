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
                                translate: "loot.kubejs.tooltip.artifacts.cloud_in_a_bottle_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("artifacts:cloud_in_a_bottle")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.cloud_in_a_bottle"));
        });
    });
});
