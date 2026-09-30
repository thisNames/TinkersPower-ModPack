ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.curios.accessories").red();

    event.add("artifacts:pickaxe_heater", text);
    event.add("artifacts:onion_ring", text);
});
