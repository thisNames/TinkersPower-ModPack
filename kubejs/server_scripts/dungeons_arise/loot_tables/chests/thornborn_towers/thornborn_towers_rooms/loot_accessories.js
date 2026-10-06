ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:thornborn_towers/thornborn_towers_rooms", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
