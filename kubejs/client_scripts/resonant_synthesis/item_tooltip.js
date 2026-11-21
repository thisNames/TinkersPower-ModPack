ItemEvents.tooltip(event =>
{
    // 彼岸储罐
    [
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank").color(Color.CYAN_DYE),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.1").color(Color.CYAN_DYE),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.2").color(Color.CYAN_DYE),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.3").lightPurple(),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.4").gray(),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.5").gray(),
        Text.translatable("item.kubejs.tooltip.resonant_synthesis.otherside_tank.6").gray()
    ].forEach(text => event.add("resonant_synthesis:otherside_tank", text));

    // 机械动力工作方块
    [
        "resonant_synthesis:deeper_casing",
        "resonant_synthesis:deeper_shaft",
        "resonant_synthesis:deeper_encased_shaft",
        "resonant_synthesis:deeper_cogwheel",
        "resonant_synthesis:deeper_large_cogwheel",
        "resonant_synthesis:deeper_press"
    ].forEach(item => event.add(item, Text.translatable("item.kubejs.tooltip.resonant_synthesis.create_machines").gray()));
});
