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
                                text: Text.translatable("loot.kubejs.tooltip.trinketsandbaubles.wither_ring_vow").getString()
                            })
                        ]
                    }
                })
            });
    
            pool.killedByPlayer();

            pool.addEmpty(96)
            pool.addItem("trinketsandbaubles:wither_ring")
                .weight(4)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.trinketsandbaubles.wither_ring"));
        });
    });
});
