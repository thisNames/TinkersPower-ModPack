ServerEvents.chestLootTables(event =>
{
    event.modify("idas:tinkers_workshop/tinkers_workshop_tools", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(12).quality(1).count([1, 6]);
            pool.addEmpty(80);

            pool.bonusRolls = 1;
        });
    });
});
