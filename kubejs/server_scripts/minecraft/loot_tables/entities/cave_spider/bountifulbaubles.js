ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:cave_spider", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.bezoar_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:bezoar")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.bezoar"));
        });
    });
});
