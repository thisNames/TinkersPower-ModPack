ServerEvents.chestLootTables(event =>
{
    event.addChest("rare-ice:rare_ice", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
