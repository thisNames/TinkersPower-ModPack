ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:maze_common_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(15).quality(1).count(1);
            pool.addEmpty(85);
        });
    });
});
