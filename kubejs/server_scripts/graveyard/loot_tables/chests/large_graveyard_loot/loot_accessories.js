ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:large_graveyard_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
