ServerEvents.chestLootTables(event =>
{
    event.modify("idas:treetop_tavern/treetop_tavern_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
