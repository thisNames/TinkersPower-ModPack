ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_secret", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l3", true).weight(8).quality(1).count(1);
            pool.addEmpty(92);
        });
    });
});
