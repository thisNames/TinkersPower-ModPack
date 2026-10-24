ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:scorched_mines/scorched_mines_normal", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(5).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(20).quality(1).count([1, 3]);
            pool.addEmpty(60);
            
            pool.rolls = 2;
            pool.bonusRolls = 1;
        });
    });
});
