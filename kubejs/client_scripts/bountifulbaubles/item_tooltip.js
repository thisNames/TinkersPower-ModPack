ItemEvents.tooltip(event =>
{
    event.addAdvanced("bountifulbaubles:rock_candy", (item, advanced, text) =>
    {
        text.set(3, Text.translatable("item.kubejs.tooltip.bountifulbaubles.rock_candy").blue())
    });
});
