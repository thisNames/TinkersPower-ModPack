ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:ender_guardian", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:endless_pearl")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.endless_pearl"));
        });
    });
});
