ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:greenwood_pub/greenwood_pub_barrels_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([1, 2]);
            pool.addEmpty(75);
            
            pool.rolls = 2;
        });
    });
});
