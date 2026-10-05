ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:flower_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addItem("iceandfire:fire_lily").weight(25).count(1);
            pool.addItem("iceandfire:frost_lily").weight(25).count(1);
            pool.addItem("iceandfire:lightning_lily").weight(25).count(1);
            pool.addItem("trinketsandbaubles:moon_rose").weight(5).count(1);
            pool.addEmpty(20);

            pool.rolls = 2;
        });
    });
});
