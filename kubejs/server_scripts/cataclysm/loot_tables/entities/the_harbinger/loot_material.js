ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:the_harbinger", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(20).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("bountifulbaubles:resplendent_token").weight(40).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("trinketsandbaubles:glowing_powder").weight(15).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(20).count([1, 6]).lootingEnchant(2, 8);
            pool.addItem("trinketsandbaubles:glowing_gem").weight(5).count([1, 4]).lootingEnchant(2, 8);

            pool.rolls = 3;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(85).count([2, 6]).lootingEnchant(1, 8);
            pool.addTag("acs:m2", true).weight(10).count([2, 4]).lootingEnchant(1, 8);
            pool.addTag("acs:m1", true).weight(5).count([2, 4]).lootingEnchant(1, 8);

            pool.rolls = 2;
        });
    });

    // 下界之心
    event.modifyEntity("cataclysm:the_harbinger", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    display: {
                        Lore: [
                            JSON.stringify({
                                text: Text.translatable("loot.kubejs.tooltip.minecraft.nether_star_vow").getString()
                            })
                        ]
                    }
                })
            });

            pool.addItem("minecraft:nether_star")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.minecraft.nether_star"));
        });
    });
});
