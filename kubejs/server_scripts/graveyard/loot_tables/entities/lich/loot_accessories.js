ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("graveyard:lich", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    tool_quality: 31
                })
            });

            pool.addTag("acs:l2", true).weight(25).count(1);
            pool.addTag("acs:l3", true).weight(75).count(1);
        });
    });
});
