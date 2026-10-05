ServerEvents.chestLootTables(event =>
{
    event.modify("alexscaves:licowitch_tower", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
