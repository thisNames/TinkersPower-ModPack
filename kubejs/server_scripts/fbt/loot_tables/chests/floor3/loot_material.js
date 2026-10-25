ServerEvents.chestLootTables(event =>
{
    event.modify("fbt:floor3", loot =>
    {
        loot.addPool(pool =>
        {
            // pool.randomChance(0.4);
            pool.addTag("acs:m3", true).weight(35).quality(1).count([2, 6]);
            pool.addEmpty(65);

            pool.bonusRolls = 1;
        });
    });
});
