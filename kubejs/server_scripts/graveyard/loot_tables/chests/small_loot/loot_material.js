ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:small_loot", loot =>
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
