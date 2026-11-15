ItemEvents.tooltip(event =>
{
    // 手术台
    [
        Text.translatable("item.kubejs.tooltip.spore.surgery_table").color(Color.RED_DYE),
        Text.translatable("item.kubejs.tooltip.spore.surgery_table.1").gray(),
    ].forEach(text => event.add("spore:surgery_table", text));
});
