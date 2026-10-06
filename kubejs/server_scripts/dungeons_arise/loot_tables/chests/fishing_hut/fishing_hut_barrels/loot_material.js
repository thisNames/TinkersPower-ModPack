ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:fishing_hut/fishing_hut_barrels", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(20).count([1, 2]);
            pool.addEmpty(80);

            pool.rolls = 2;
        });

        loot.addPool(pool =>
        {
            pool.addItem("artifacts:anglers_hat").weight(50).count(1);
            pool.addEmpty(50);
        });
    });
});
