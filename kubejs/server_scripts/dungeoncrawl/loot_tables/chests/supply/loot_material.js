ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(5).quality(1).count([2, 4]);
            pool.addTag("acs:m3", true).weight(75).quality(1).count([2, 6]);
            pool.addEmpty(20);

            pool.bonusRolls = 1;
        });
    });
});
