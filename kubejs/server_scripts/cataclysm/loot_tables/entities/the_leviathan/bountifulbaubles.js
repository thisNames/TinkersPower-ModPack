ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("cataclysm:the_leviathan", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:wormhole_mirror")
                .weight(1)
                .count(1)
                .name(Text.translatable("loot.kubejs.tooltip.bountifulbaubles.wormhole_mirror"));
        });
    });
});
