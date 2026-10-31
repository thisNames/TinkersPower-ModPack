ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_basement", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l2", true).weight(15).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(35).quality(1).count(1);
            pool.addEmpty(50);
        });
    });
});
