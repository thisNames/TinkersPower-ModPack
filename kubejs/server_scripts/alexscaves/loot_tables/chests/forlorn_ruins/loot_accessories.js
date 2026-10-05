ServerEvents.chestLootTables(event =>
{
    event.modify("alexscaves:forlorn_ruins", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
