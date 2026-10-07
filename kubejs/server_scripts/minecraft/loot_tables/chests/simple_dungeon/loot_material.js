ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:simple_dungeon", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(6).count([1, 4]);
            pool.addTag("acs:m3", true).weight(10).count([1, 6]);
            pool.addEmpty(84);

            pool.rolls = 2;
        });
    });
});
