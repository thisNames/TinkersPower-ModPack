ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:mushroom_mines/mushroom_mines_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(6).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(6).quality(1).count(1);
            pool.addEmpty(88);
        });
    });
});
