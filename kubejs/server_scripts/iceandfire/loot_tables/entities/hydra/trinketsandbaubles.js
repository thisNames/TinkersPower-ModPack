ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("iceandfire:hydra", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("trinketsandbaubles:poison_stone").weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
