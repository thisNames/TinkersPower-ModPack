ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:foundry/foundry_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
