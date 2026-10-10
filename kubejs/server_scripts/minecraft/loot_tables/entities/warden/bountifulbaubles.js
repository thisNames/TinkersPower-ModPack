ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:warden", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.bountifulbaubles.sunglasses_vow").getString()
                            })
                        ]
                    }
                })
            });
            
            pool.killedByPlayer();

            pool.addEmpty(88);
            pool.addItem("bountifulbaubles:sunglasses")
                .weight(12)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.sunglasses"));
        });
    });
});
