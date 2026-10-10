ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("ba_bt:end_golem", loot =>
    {
        // 饰品
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.endless_pearl2_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("bountifulbaubles:endless_pearl")
                .weight(1)
                .count(1)
                .enchantRandomly("minecraft:looting")
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.endless_pearl2"));
        });
    });
});
