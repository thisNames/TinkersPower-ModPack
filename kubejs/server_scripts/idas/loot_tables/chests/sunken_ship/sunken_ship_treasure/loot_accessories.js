ServerEvents.chestLootTables(event =>
{
    event.modify("idas:sunken_ship/sunken_ship_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(6).count(1);
            pool.addEmpty(94);
        });
    });
});
