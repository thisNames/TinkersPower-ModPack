ServerEvents.chestLootTables(event =>
{
    event.modify("idas:enchantingtower/enchantingtower_top_ars", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
