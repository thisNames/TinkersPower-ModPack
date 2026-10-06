ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:wither_skeleton", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).count([1, 2]);
            pool.addItem("trinketsandbaubles:glowing_ingot").weight(5).count(1);
            pool.addEmpty(80);
        });
    });
});
