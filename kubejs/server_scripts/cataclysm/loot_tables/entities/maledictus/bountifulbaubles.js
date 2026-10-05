ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:maledictus", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:gauntlets_dexterity")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.gauntlets_dexterity"));
        });
    });
});
