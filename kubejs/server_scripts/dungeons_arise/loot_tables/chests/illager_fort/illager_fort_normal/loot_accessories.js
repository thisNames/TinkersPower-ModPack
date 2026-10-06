ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_fort/illager_fort_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
