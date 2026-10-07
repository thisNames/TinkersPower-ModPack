ItemEvents.modification(event =>
{
    // 药水
    [
        "supplementaries:lumisene_bottle"
    ].forEach(item =>
    {
        event.modify(item, c =>
        {
            c.maxStackSize = 16;
        });
    });
});
