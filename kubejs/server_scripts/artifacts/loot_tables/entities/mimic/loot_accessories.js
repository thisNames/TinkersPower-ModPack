ServerEvents.entityLootTables(event =>
{
    event.addEntity("artifacts:mimic", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(1).count(1);
        });
    });
});
