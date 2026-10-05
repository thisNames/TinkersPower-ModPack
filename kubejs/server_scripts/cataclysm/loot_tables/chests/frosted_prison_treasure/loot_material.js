ServerEvents.chestLootTables(event =>
{
    event.modify("cataclysm:frosted_prison_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([2, 6]);
            pool.addTag("acs:m2", true).weight(50).count([2, 6]);
            pool.addEmpty(45);

            pool.rolls = 2;
        });
    });
});
