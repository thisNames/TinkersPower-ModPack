ServerEvents.chestLootTables(event =>
{
    event.modify("cataclysm:amethyst_nest_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(25).quality(1).count([2, 6]);
            pool.addEmpty(75);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
