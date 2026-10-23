ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:netherite_monstrosity", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.obsidian_skull_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });
    
            pool.addItem("bountifulbaubles:obsidian_skull")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.obsidian_skull"));
        });
    });
});
