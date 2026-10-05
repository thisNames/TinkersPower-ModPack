ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:medium_graveyard_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
