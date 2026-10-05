ServerEvents.chestLootTables(event =>
{
    event.modify("twilightforest:labyrinth_vault_jackpot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:l2", true).weight(2).count(1);
            pool.addTag("acs:l3", true).weight(4).count(1);
            pool.addEmpty(94);
        });
    });
});
