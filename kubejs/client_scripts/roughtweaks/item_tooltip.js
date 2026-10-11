ItemEvents.tooltip(event =>
{
    event.addAdvanced("roughtweaks:bandage", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("item.kubejs.tooltip.roughtweaks.text", "1").blue());
    });

    event.addAdvanced("roughtweaks:medkit_enchanted", (item, advanced, text) =>
    {
        text.set(0, Text.translatable("item.kubejs.tooltip.roughtweaks.medkit_enchanted").lightPurple());
        text.set(1, Text.translatable("item.kubejs.tooltip.roughtweaks.text", "3").blue());
    });

    event.addAdvanced("roughtweaks:medkit", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("item.kubejs.tooltip.roughtweaks.text", "2").blue());
    });

    event.addAdvanced("roughtweaks:plaster", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("item.kubejs.tooltip.roughtweaks.text", "1").blue());
    });

    event.addAdvanced("roughtweaks:salve", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("item.kubejs.tooltip.roughtweaks.text", "1").blue());
    });
});
