ServerEvents.chestLootTables(event =>
{
    event.modify("deeperdarker:ancient_temple_secret", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addTag("acs:m2", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m3", true).weight(15).quality(1).count([1, 6]);
            pool.addEmpty(80)

            pool.bonusRolls = 1;
        });
    });
});
