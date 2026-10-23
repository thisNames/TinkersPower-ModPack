ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:scylla", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.broken_heart_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("bountifulbaubles:broken_heart")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.broken_heart"));
        });
    });
});
