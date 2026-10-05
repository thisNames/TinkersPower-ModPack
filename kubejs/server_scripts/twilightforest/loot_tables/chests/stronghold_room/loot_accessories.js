ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:stronghold_room", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(4).count(1);
            pool.addEmpty(96);
        });
    });
});
