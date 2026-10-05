ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:maze_common_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(25).count([2, 6]);
            pool.addTag("acs:m3", true).weight(50).count([2, 8]);
            pool.addEmpty(25);

            pool.rolls = 2;
        });
    });
});
