ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ignis", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.wrath_pendant_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("bountifulbaubles:wrath_pendant")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.wrath_pendant"));
        });
    });
});
