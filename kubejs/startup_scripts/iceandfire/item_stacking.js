ItemEvents.modification(event =>
{
    // 龙血
    [
        "iceandfire:fire_dragon_blood",
        "iceandfire:ice_dragon_blood",
        "iceandfire:lightning_dragon_blood"
    ].forEach(item =>
    {
        event.modify(item, c =>
        {
            c.maxStackSize = 16;
        });
    });
});
