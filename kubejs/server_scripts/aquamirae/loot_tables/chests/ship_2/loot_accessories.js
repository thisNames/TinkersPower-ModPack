ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:ship_2", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(15).count(1);
            pool.addEmpty(85);
        });
    });
});
