ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tudor_pub/tudor_pub_storage", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
