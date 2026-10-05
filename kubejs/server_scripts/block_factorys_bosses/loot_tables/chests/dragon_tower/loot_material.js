ServerEvents.chestLootTables(event =>
{
    event.modify("block_factorys_bosses:dragon_tower", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([2, 6]);
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).count([2, 6]);
            pool.addEmpty(50);

            pool.rolls = 2;
        });
    });
});
