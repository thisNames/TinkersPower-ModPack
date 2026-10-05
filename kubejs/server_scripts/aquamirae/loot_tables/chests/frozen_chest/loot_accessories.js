ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:frozen_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(1).count(1);
        });
    });
});
