ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:food", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:spectral_silt").weight(25).count([1, 3]);
            pool.addEmpty(85);
        });
    });
});
