ItemEvents.modification(event =>
{
    // 药水
    [
        "minecraft:potion",
        "minecraft:splash_potion",
        "minecraft:lingering_potion"
    ].forEach(item =>
    {
        event.modify(item, c =>
        {
            c.maxStackSize = 16;
        });
    });
});
