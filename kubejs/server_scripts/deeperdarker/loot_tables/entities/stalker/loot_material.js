ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("deeperdarker:stalker", loot =>
    {
        loot.addPool(pool =>
        {
            pool.killedByPlayer();
            pool.addItem("bountifulbaubles:resplendent_token").weight(35).count([2, 6]).lootingEnchant(2, 18);
            pool.addItem("bountifulbaubles:spectral_silt").weight(15).count(2).lootingEnchant(2, 18);
            pool.addEmpty(50);

            pool.rolls = 3;
        });

        loot.addPool(pool =>
        {
            pool.addItem("voidtotem:totem_of_void_undying").weight(1).count(1);
        });
    });
});
