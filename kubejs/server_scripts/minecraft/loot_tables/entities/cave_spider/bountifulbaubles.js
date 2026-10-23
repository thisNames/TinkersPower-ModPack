ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:cave_spider", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:bezoar").weight(12).count(1);
        });

        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.bezoar_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.killedByPlayer();

            pool.addEmpty(95);
            pool.addItem("bountifulbaubles:bezoar")
                .weight(5)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.bezoar"));
        });
    });
});
