ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:shiraz_palace/shiraz_palace_elite", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
