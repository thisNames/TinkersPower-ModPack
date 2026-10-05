ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:warden", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            
            pool.addItem("minecraft:echo_shard").weight(25).count([2, 6]).lootingEnchant(2, 8);
            pool.addEmpty(75);
        });
    });
});
