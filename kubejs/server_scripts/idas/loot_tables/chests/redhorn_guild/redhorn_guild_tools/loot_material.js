ServerEvents.chestLootTables(event =>
{
    event.modify("idas:redhorn_guild/redhorn_guild_tools", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(8).count([1, 6]);
            pool.addTag("acs:m3", true).weight(12).count([1, 6]);
            pool.addEmpty(80);
        });
    });
});
