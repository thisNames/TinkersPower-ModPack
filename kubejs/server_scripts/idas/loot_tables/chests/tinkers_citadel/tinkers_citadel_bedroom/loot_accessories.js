ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tinkers_citadel/tinkers_citadel_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(3).count(1);
            pool.addEmpty(97);
        });
    });
});
