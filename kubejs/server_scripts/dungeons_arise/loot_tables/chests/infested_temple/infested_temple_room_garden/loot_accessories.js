ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:infested_temple/infested_temple_room_garden", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
