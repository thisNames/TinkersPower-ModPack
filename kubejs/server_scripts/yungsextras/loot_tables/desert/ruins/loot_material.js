ServerEvents.genericLootTables(event =>
{
    event.modify("yungsextras:desert/ruins", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([1, 3]);
            pool.addEmpty(85);

            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
