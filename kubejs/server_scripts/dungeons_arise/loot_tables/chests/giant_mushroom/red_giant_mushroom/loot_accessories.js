ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:giant_mushroom/red_giant_mushroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
