ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:wither_skeleton", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.xat.wither_ring_vow").getString()
                            })
                        ]
                    }
                }),
                tool_quality: 31
            });
    
            pool.killedByPlayer();

            pool.addEmpty(96)
            pool.addItem("xat:wither_ring")
                .weight(4)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.xat.wither_ring"));
        });
    });
});
