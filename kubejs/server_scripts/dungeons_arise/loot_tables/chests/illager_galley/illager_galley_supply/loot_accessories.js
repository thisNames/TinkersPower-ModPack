ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:illager_galley/illager_galley_supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(2).quality(1).count(1);
            pool.addEmpty(98);
        });
    });
});
