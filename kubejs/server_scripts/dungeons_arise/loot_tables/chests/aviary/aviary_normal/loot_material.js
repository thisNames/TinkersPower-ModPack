ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:aviary/aviary_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([1, 2]);
            pool.addTag("acs:m2", true).weight(35).count([1, 3]);
            pool.addEmpty(60);

            pool.rolls = 2;
        });
    });
});
