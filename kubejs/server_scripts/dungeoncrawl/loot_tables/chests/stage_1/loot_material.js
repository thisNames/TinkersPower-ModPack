ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:stage_1", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(75).quality(1).count([2, 4]);
            pool.addEmpty(25);

            pool.bonusRolls = 1;
        });
    });
});
