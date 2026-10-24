ServerEvents.chestLootTables(event =>
{
    event.modify("alexscaves:caveman_house", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(5).quality(1).count(1);
            pool.addEmpty(95);
        });
    });
});
