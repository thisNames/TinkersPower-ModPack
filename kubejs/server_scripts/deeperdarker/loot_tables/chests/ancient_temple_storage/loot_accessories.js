ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_storage", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l3", true).weight(5).quality(1).count(1);
            pool.addEmpty(95);
        });
    });
});
