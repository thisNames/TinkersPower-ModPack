ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:wither_skeleton", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("bountifulbaubles:resplendent_token").weight(15).quality(1).count([1, 2]);
            pool.addItem("xat:glowing_ingot").weight(5).quality(1).count(1);
            pool.addEmpty(80);
        });
    });
});
