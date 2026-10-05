ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("block_factorys_bosses:soul_knight_wither_skeleton", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(15).count([2, 6]).lootingEnchant(1, 8);
            pool.addTag("acs:m2", true).weight(5).count([2, 4]).lootingEnchant(1, 8);
            pool.addEmpty(80);
        });
    });
});
