ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.curios.accessories").red();

    event.add("cataclysm:belt_of_monstrosity", text);
});
