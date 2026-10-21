ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:fishing_hut/fishing_hut_barrels", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("artifacts:anglers_hat").weight(50).count(1);
            pool.addEmpty(50);
        });
    });
});
