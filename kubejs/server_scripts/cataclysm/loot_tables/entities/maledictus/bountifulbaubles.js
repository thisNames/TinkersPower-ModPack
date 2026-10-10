ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:maledictus", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.gauntlets_dexterity_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("bountifulbaubles:gauntlets_dexterity")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.gauntlets_dexterity"));
        });
    });
});
