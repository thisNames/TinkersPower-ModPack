ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:medium_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(75).count([2, 8]);
            pool.addEmpty(10);

            pool.rolls = 2;
        });
    });
});
