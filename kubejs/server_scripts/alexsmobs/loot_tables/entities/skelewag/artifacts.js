ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("alexsmobs:skelewag", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.artifacts.plastic_drinking_hat_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("artifacts:plastic_drinking_hat")
                .weight(30)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.plastic_drinking_hat"));

            pool.addItem("artifacts:novelty_drinking_hat")
                .weight(30)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.plastic_drinking_hat"));

            pool.addEmpty(40);
        });
    });
});
