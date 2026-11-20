ItemEvents.tooltip(event =>
{
    // 动力轴承
    [
        Text.translatable("item.kubejs.tooltip.create.mechanical_bearing").gray(),
        Text.translatable("item.kubejs.tooltip.create.mechanical_bearing_rotation", "128").gray()
    ].forEach(text => event.add("create:mechanical_bearing", text));
});
