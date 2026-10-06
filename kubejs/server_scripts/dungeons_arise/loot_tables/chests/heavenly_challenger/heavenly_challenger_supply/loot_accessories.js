ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:heavenly_challenger/heavenly_challenger_supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
