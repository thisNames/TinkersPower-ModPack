ServerEvents.chestLootTables(event =>
{
    event.modify("spore:organ_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:spectral_silt").weight(15).quality(1).count([2, 4]);
            pool.addEmpty(85);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
