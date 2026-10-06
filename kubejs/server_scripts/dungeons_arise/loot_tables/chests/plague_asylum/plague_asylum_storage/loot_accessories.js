ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:plague_asylum/plague_asylum_storage", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
