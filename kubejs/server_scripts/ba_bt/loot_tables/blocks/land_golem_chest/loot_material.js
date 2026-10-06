ServerEvents.blockLootTables(event =>
{
    event.modifyBlock("ba_bt:land_golem_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(35).count([1, 6]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).count([1, 2]);
            pool.addEmpty(50);
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(90).count([1, 6]);
            pool.addTag("acs:m2", true).weight(10).count([1, 4]);
        });
    });
});
