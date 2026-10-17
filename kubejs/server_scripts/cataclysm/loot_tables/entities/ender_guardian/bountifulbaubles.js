ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ender_guardian", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.endless_pearl_vow").getString()
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("bountifulbaubles:endless_pearl")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.endless_pearl"));
        });
    });
});
