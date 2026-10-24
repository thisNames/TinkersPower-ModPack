ServerEvents.chestLootTables(event =>
{
    event.modify("minecraft:shipwreck_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(8).quality(1).count(1);
            pool.addEmpty(92);
        });
    });
});
