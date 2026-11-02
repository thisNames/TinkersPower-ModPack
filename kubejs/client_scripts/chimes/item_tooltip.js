ItemEvents.tooltip(event =>
{
    // 竹风铃
    event.add("chimes:bamboo_chimes", Text.translatable("item.kubejs.tooltip.chimes.bamboo_chimes").green());
    event.add("chimes:bamboo_chimes", Text.translatable("item.kubejs.tooltip.chimes_right_bind").gray());

    // 铁风铃
    event.add("chimes:iron_chimes", Text.translatable("item.kubejs.tooltip.chimes.iron_chimes"));
    event.add("chimes:iron_chimes", Text.translatable("item.kubejs.tooltip.chimes_right_bind").gray());

    // 铜风铃
    event.add("chimes:copper_chimes", Text.translatable("item.kubejs.tooltip.chimes.copper_chimes").gold());
    event.add("chimes:copper_chimes", Text.translatable("item.kubejs.tooltip.chimes_right_bind").gray());

    // 刻制竹风铃
    event.add("chimes:carved_bamboo_chimes", Text.translatable("item.kubejs.tooltip.chimes.carved_bamboo_chimes").yellow());
    event.add("chimes:carved_bamboo_chimes", Text.translatable("item.kubejs.tooltip.chimes.carved_bamboo_chimes.1").yellow());
    event.add("chimes:carved_bamboo_chimes", Text.translatable("item.kubejs.tooltip.chimes_right_bind").gray());

    // 紫水晶风铃
    event.add("chimes:amethyst_chimes", Text.translatable("item.kubejs.tooltip.chimes.amethyst_chimes").lightPurple());
    event.add("chimes:amethyst_chimes", Text.translatable("item.kubejs.tooltip.chimes.amethyst_chimes.1").lightPurple());
    event.add("chimes:amethyst_chimes", Text.translatable("item.kubejs.tooltip.chimes_not_right_bind").gray());

    // 玻璃风铃
    event.add("chimes:glass_bells", Text.translatable("item.kubejs.tooltip.chimes.glass_bells"));
    event.add("chimes:glass_bells", Text.translatable("item.kubejs.tooltip.chimes_not_right_bind").gray());
});
