ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:foundry/foundry_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(5).count(1);
            pool.addTag("acs:l3", true).weight(7).count(1);
            pool.addEmpty(88);
        });
    });
});
