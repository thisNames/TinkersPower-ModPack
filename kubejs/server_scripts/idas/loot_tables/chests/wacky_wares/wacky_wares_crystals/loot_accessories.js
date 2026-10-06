ServerEvents.chestLootTables(event =>
{
    event.modify("idas:wacky_wares/wacky_wares_crystals", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
