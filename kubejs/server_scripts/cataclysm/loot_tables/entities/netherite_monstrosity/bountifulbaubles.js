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
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.obsidian_skull_vow").getString()
                            })
                        ]
                    }
                })
            });
    
            pool.addItem("bountifulbaubles:obsidian_skull")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.obsidian_skull"));
        });
    });
});
