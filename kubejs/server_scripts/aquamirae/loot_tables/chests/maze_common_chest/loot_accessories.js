ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:maze_common_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(15).count(1);
            pool.addEmpty(85);
        });
    });
});
