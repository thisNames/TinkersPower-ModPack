ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:mushroom_mines/mushroom_mines_tools", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
