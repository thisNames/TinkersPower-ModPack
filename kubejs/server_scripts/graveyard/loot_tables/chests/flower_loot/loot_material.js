ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:flower_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("iceandfire:fire_lily").weight(25).quality(1).count(1);
            pool.addItem("iceandfire:frost_lily").weight(25).quality(1).count(1);
            pool.addItem("iceandfire:lightning_lily").weight(25).quality(1).count(1);
            pool.addItem("xat:moon_rose").weight(5).quality(1).count(1);
            pool.addEmpty(20);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });
    });
});
