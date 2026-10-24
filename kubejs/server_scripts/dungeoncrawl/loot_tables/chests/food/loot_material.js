ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:food", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).quality(1).count([1, 3]);
            pool.addEmpty(85);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
