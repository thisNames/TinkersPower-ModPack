ServerEvents.chestLootTables(event =>
{
    event.modify("dungeoncrawl:secret_room", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m2", true).weight(15).count([1, 2]);
            pool.addTag("acs:m3", true).weight(70).count([2, 4]);
            pool.addEmpty(15);
        });
    });
});
