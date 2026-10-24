ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tinkers_citadel/tinkers_citadel_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(8).quality(1).count([1, 6]);
            pool.addTag("acs:m3", true).weight(12).quality(1).count([1, 6]);
            pool.addEmpty(80);

            pool.bonusRolls = 1;
        });
    });
});
