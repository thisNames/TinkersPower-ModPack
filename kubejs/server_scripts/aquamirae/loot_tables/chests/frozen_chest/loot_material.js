ServerEvents.chestLootTables(event =>
{
    event.modify("aquamirae:frozen_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(25).count([1, 3]);
            pool.addTag("acs:m2", true).weight(75).count([2, 6]);

            pool.rolls = 2;
        });
    });
});
