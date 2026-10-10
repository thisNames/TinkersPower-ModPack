ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("aquamirae:captain_cornelia", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.artifacts.crystal_heart_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("artifacts:crystal_heart")
                .weight(1)
                .count(1)
                .enchantRandomly("minecraft:thorns")
                .name(Text.translatable("loot.kubejs.tooltip.artifacts.crystal_heart"));
        });
    });
});
