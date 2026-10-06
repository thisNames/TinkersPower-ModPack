ServerEvents.chestLootTables(event =>
{
    event.modify("idas:ancient_portal/ancient_portal_overworld", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
