ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:labyrinth_vault_jackpot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(5).count([1, 2]);
            pool.addTag("acs:m2", true).weight(15).count([2, 6]);
            pool.addTag("acs:m3", true).weight(70).count([2, 8]);
            pool.addEmpty(10);

            pool.rolls = 2;
        });
    });
});
