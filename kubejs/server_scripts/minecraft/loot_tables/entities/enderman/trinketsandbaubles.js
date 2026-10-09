ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:enderman", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();

            pool.addEmpty(96)
            pool.addItem("trinketsandbaubles:ender_tiara")
                .weight(4)
                .count(1);
        });
    });
});
