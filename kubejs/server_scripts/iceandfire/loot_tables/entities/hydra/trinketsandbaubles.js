ServerEvents.entityLootTables(event =>
{
    event.modifyEntity("iceandfire:hydra", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addFunction({
                function: "minecraft:set_nbt",
                tag: JSON.stringify({
                    tool_quality: 31
                })
            });

            pool.addItem("xat:poison_stone").weight(5).count(1);
            pool.addEmpty(95);
        });
    });
});
