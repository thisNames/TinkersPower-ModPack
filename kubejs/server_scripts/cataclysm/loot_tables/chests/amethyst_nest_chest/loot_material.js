ServerEvents.chestLootTables(event =>
{
    event.modify("cataclysm:amethyst_nest_chest", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(25).count([2, 6]);
            pool.addEmpty(75);

            pool.rolls = 2;
        });
    });
});
