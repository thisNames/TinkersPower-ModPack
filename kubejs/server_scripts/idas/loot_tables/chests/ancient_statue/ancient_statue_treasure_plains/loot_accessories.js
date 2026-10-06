ServerEvents.chestLootTables(event =>
{
    event.modify("idas:ancient_statue/ancient_statue_treasure_plains", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l3", true).weight(2).count(1);
            pool.addEmpty(98);
        });
    });
});
