ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:hill_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(60).count([2, 8]);
            pool.addEmpty(25);

            pool.rolls = 2;
        });
    });
});
