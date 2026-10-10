ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("ba_bt:land_golem", loot =>
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
                                text: Text.translatable("loot.kubejs.tooltip.artifacts.power_glove_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("artifacts:power_glove")
                .weight(1)
                .count(1)
                .enchantRandomly("minecraft:sharpness")
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.power_glove"));
        });
    });
});
