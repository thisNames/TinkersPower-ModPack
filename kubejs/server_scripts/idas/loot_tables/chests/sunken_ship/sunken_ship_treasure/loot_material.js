ServerEvents.chestLootTables(event =>
{
    event.modify("idas:sunken_ship/sunken_ship_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(8).quality(1).count([1, 6]);
            pool.addTag("acs:m3", true).weight(12).quality(1).count([1, 6]);
            pool.addEmpty(80);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
