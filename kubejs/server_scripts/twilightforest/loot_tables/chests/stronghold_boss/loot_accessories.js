ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:stronghold_boss", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(2).count(1);
            pool.addTag("acs:l3", true).weight(4).count(1);
            pool.addEmpty(94);
        });
    });
});
