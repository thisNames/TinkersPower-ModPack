ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tinkers_workshop/tinkers_workshop_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
