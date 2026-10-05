ServerEvents.chestLootTables(event =>
{
    event.addChest("rare-ice:rare_ice", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([2, 4]);
            pool.addItem("bountifulbaubles:resplendent_token").weight(25).count([1, 2]);
            pool.addEmpty(50);
        });

        loot.addPool(pool =>
        {
            pool.addItem("aquamirae:sharp_bones").weight(50).count(1);
            pool.addItem("aquamirae:spinefish").weight(25).count(1);
            pool.addItem("aquamirae:poseidons_breakfast").weight(5).count(1);
            pool.addItem("aquamirae:fin").weight(10).count(1);
            pool.addItem("aquamirae:esca").weight(10).count(1);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);

            pool.addTag("acs:m2", true).weight(5).count([2, 6]);
            pool.addTag("acs:m3", true).weight(75).count([2, 8]);

            pool.addEmpty(15);
        });
    });
});
