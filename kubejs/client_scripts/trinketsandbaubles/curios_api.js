ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.curios.accessories").red();
        
    event.add("trinketsandbaubles:dragons_eye", text);
});
