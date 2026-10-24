ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:frozen_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:l2", true).weight(1).quality(1).count(1);
        });
    });
});
