ServerEvents.chestLootTables(event =>
{
    event.modify("idas:train_ruins/train_ruins_bedroom", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:l3", true).weight(2).quality(1).count(1);
            pool.addEmpty(98);
        });
    });
});
