ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:stray", loot =>
    { 
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.ring_overclocking_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:ring_overclocking")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.ring_overclocking"));
        });
    });
});
