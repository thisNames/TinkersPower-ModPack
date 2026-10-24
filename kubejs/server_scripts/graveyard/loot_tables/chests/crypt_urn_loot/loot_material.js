ServerEvents.chestLootTables(event =>
{
    event.modify("graveyard:crypt_urn_loot", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.25);
            pool.addTag("acs:m2", true).weight(15).quality(1).count([2, 6]);
            pool.addTag("acs:m3", true).weight(55).quality(1).count([2, 8]);
            pool.addEmpty(30);

            pool.bonusRolls = 1;
        });
    });
});
