ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:flesh_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(25).count([2, 6]);
            pool.addEmpty(75);
        });
    });
});
