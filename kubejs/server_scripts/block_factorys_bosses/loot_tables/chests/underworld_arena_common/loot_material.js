ServerEvents.chestLootTables(event =>
{
    event.modify("block_factorys_bosses:underworld_arena_common", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([2, 6]);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(30).quality(1).count([2, 6]);
            pool.addEmpty(50);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
