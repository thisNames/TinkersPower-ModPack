ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:stronghold_library", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(3).count(1);
            pool.addTag("acs:l3", true).weight(3).count(1);
            pool.addEmpty(94);
        });
    });
});
