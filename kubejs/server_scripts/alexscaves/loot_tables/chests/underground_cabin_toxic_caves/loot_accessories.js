ServerEvents.chestLootTables(event =>
{
    event.modify("alexscaves:underground_cabin_toxic_caves", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
