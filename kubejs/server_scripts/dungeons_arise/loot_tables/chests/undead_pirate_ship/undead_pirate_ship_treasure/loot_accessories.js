ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:undead_pirate_ship/undead_pirate_ship_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:l2", true).weight(6).quality(1).count(1);
            pool.addTag("acs:l3", true).weight(6).quality(1).count(1);
            pool.addEmpty(88);
        });
    });
});
