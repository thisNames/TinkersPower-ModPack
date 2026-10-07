ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:stronghold_corridor", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
