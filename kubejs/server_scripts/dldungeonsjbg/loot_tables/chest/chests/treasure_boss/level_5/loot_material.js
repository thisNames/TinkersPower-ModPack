ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure_boss/level_5", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(7).count([1, 2]);
            pool.addTag("acs:m2", true).weight(38).count([2, 6]);
            pool.addEmpty(15);

            pool.rolls = 5;
        });
    });
});
