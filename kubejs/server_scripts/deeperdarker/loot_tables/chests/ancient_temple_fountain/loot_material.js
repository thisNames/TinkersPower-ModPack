ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_fountain", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:m2", true).weight(10).quality(1).count([1, 3]);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([1, 8]);
            pool.addEmpty(75)
            
            pool.bonusRolls = 1;
        });
    });
});
