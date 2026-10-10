ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("ba_bt:nether_golem", loot =>
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
                                text: Text.translatable("loot.kubejs.tooltip.artifacts.flame_pendant_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("artifacts:flame_pendant")
                .weight(1)
                .count(1)
                .enchantRandomly("minecraft:fire_aspect")
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.flame_pendant"));
        });
    });
});
