ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tudor_pub/tudor_pub_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(4).count(1);
            pool.addEmpty(96);
        });
    });
});
