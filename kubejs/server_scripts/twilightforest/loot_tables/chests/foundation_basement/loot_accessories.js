ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:foundation_basement", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(4).count(1);
            pool.addEmpty(96);
        });
    });
});
