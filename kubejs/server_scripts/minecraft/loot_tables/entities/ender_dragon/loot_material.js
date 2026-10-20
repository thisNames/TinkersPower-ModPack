ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:ender_dragon", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:resplendent_token").weight(40).count([2, 8]).lootingEnchant(2, 8);

            pool.addItem("xat:glowing_powder").weight(15).count([2, 8]).lootingEnchant(2, 8);
            pool.addItem("xat:glowing_ingot").weight(20).count([1, 6]).lootingEnchant(2, 8);
            pool.addItem("xat:glowing_gem").weight(5).count([1, 4]).lootingEnchant(2, 8);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:ender_dragon_scale").weight(75).count(1);
            pool.addItem("bountifulbaubles:broken_black_dragon_scale").weight(25).count(1);

            pool.rolls = 7;
        });

        loot.addPool(pool =>
        {
            pool.addItem("tconstruct:dragon_scale").weight(50).count(1);
            pool.addEmpty(50);

            pool.rolls = 3;
        });
    });
});
