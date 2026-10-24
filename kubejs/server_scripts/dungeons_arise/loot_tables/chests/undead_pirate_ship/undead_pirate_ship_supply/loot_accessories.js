ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:undead_pirate_ship/undead_pirate_ship_supply", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(2).quality(1).count(1);
            pool.addEmpty(98);
        });
    });
});
