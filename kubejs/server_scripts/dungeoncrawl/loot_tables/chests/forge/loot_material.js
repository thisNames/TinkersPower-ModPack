ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:forge", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m3", true).weight(70).quality(1).count([1, 2]);
            pool.addEmpty(25);

            pool.bonusRolls = 1;
        });
    });
});
