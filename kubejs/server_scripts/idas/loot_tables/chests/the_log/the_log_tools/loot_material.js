ServerEvents.chestLootTables(event =>
{
    event.modify("idas:the_log/the_log_tools", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(5).count([1, 6]);
            pool.addEmpty(95);

            pool.rolls = 2;
        });
    });
});
