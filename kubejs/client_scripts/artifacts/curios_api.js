ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.curios.accessories").red();

    event.add("artifacts:pickaxe_heater", text);
    event.add("artifacts:onion_ring", text);
    event.add("artifacts:cross_necklace", text);
    event.add("artifacts:obsidian_skull", text);
});
