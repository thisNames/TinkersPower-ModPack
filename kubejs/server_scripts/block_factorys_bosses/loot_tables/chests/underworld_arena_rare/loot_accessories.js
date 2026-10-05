ServerEvents.chestLootTables(event =>
{
    event.modify("block_factorys_bosses:underworld_arena_rare", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(5).count(1);
            pool.addTag("acs:l3", true).weight(10).count(1);
            pool.addEmpty(80);
        });
    });
});
