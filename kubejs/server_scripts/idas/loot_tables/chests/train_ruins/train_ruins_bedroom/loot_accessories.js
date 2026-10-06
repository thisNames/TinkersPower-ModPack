ServerEvents.chestLootTables(event =>
{
    event.modify("idas:train_ruins/train_ruins_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
