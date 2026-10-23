ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:husk", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.apple_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:apple")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.apple"));
        });
    });
});
