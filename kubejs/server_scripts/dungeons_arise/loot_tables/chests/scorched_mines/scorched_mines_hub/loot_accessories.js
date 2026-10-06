ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:scorched_mines/scorched_mines_hub", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
