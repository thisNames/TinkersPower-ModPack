ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:scorched_mines/scorched_mines_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(3).quality(1).count(1);
            pool.addEmpty(97);
        });
    });
});
