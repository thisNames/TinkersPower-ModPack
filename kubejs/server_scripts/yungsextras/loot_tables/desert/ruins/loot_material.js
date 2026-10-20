ServerEvents.genericLootTables(event =>
{
    event.modify("yungsextras:desert/ruins", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m3", true).weight(15).count([1, 3]);
            pool.addEmpty(85);

            pool.rolls = 2;
        });
    });
});
