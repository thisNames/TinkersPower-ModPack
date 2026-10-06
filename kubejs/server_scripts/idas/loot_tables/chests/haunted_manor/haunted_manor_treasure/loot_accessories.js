ServerEvents.chestLootTables(event =>
{
    event.modify("idas:haunted_manor/haunted_manor_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(6).count(1);
            pool.addEmpty(94);
        });
    });
});
