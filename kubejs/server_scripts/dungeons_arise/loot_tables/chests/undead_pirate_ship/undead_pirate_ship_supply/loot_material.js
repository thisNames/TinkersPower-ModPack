ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:undead_pirate_ship/undead_pirate_ship_supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).count([1, 3]);
            pool.addTag("acs:m3", true).weight(15).count([1, 2]);
            pool.addEmpty(60);
            
            pool.rolls = 2;
        });
    });
});
