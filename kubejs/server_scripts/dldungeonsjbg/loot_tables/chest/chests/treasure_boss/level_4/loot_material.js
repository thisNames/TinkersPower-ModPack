ServerEvents.genericLootTables(event =>
{
    event.modify("dldungeonsjbg:chest/chests/treasure_boss/level_4", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([1, 2]);
            pool.addTag("acs:m2", true).weight(35).count([2, 6]);
            pool.addEmpty(60);

            pool.rolls = 3;
        });
    });
});
