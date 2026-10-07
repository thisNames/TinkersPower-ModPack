ItemEvents.modification(event =>
{
    // 药水
    [
        "toughasnails:dirty_water_bottle",
        "toughasnails:purified_water_bottle"
    ].forEach(item =>
    {
        event.modify(item, c =>
        {
            c.maxStackSize = 16;
        });
    });
});
