ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("aquamirae:captain_cornelia", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("trinketsandbaubles:moon_rose")
                .weight(1)
                .count(1)
                .enchantRandomly("minecraft:thorns")
                .name(Text.translatable("loot.kubejs.tooltip.trinketsandbaubles.moon_rose"));
        });
    });
});
