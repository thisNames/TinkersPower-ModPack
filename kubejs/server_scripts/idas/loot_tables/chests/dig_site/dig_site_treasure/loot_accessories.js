ServerEvents.chestLootTables(event =>
{
    event.modify("idas:dig_site/dig_site_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(4).quality(1).count(1);
            pool.addEmpty(96);
        });
    });
});
