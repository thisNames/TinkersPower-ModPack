ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:crystallized_amber", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:m3", true).weight(25).quality(1).count([1, 2]);
            pool.addEmpty(75)

            pool.bonusRolls = 1;
        });
    });
});
