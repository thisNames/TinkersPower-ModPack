ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ignis", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.wrath_pendant_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("bountifulbaubles:wrath_pendant")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.wrath_pendant"));
        });
    });
});
