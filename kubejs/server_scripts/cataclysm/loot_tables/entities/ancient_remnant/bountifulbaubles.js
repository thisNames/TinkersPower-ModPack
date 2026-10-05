ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ancient_remnant", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:vampiric_glove")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.vampiric_glove"));
        });
    });
});
