ServerEvents.entityLootTables(event =>
{
    event.addEntity("artifacts:mimic", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:resplendent_token").weight(75).count([1, 3]).lootingEnchant(2, 8);
            pool.addItem("xat:glowing_ingot").weight(5).count(1).lootingEnchant(2, 8);
            pool.addEmpty(20);

            pool.rolls = 2;
        });
    });
});
