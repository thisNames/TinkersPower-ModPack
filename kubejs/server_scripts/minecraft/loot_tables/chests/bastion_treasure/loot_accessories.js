ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:bastion_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(7).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(13).quality(1).count(1);
            pool.addEmpty(80);
        });
    });
});
