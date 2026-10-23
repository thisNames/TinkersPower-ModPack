ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:the_leviathan", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                translate: "loot.kubejs.tooltip.bountifulbaubles.wormhole_mirror_vow"
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });
    
            pool.addItem("bountifulbaubles:wormhole_mirror")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.wormhole_mirror"));
        });
    });
});
