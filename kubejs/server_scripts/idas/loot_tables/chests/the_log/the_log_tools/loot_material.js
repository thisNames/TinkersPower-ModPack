ServerEvents.chestLootTables(event =>
{
    event.modify("idas:the_log/the_log_tools", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(5).quality(1).count([1, 6]);
            pool.addEmpty(95);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
