ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("block_factorys_bosses:yeti", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.xat.teddy_bear_vow").getString()
                            })
                        ]
                    },
                    tool_quality: 31
                })
            });

            pool.addItem("xat:teddy_bear")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.xat.teddy_bear"));
        });
    });
});
