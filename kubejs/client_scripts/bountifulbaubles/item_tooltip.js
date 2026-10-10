ItemEvents.tooltip(event =>
{
    event.addAdvanced("bountifulbaubles:rock_candy", (item, advanced, text) =>
    {
        text.set(3, Text.translatable("item.kubejs.tooltip.bountifulbaubles.rock_candy").blue())
    });

    event.addAdvanced("bountifulbaubles:resplendent_token", (item, advanced, text) =>
    {
        text.set(2, Text.translatable("item.kubejs.tooltip.bountifulbaubles.resplendent_token").gold())
    });
});
