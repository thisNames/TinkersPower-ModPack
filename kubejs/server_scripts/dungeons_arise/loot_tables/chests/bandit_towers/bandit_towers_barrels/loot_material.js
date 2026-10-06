ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:bandit_towers/bandit_towers_barrels", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(20).count([1, 2]);
            pool.addEmpty(80);
        });
    });
});
