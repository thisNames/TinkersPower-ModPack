ServerEvents.chestLootTables(event =>
{
    event.modify("spore:document_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:spectral_silt").weight(15).quality(1).count([2, 4]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(5).quality(1).count([1, 2]);
            pool.addEmpty(80);

            pool.bonusRolls = 1;
        });
    });
});
