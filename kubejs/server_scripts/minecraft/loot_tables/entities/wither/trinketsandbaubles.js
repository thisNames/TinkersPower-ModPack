ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:wither", loot =>
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
                })
            });

            pool.killedByPlayer();

            pool.addEmpty(92)
            pool.addItem("xat:wither_ring")
                .weight(6)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.xat.wither_ring"));
        });
    });
});
