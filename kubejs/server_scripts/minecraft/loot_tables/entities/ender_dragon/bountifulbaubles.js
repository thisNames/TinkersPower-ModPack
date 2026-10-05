ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("minecraft:ender_dragon", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("bountifulbaubles:ender_dragon_scale").weight(75).count(1);
            pool.addItem("bountifulbaubles:broken_black_dragon_scale").weight(25).count(1);

            pool.rolls = 7;
        });


        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true);

            pool.rolls = 2;
        });
    });
});
