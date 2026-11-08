ItemEvents.tooltip(event =>
{
    // 回忆药水
    event.add("bountifulbaubles:potion_recall", Text.translatable("item.kubejs.tooltip.bountifulbaubles.recall").color(Color.CYAN_DYE));

    // 魔镜
    event.add("bountifulbaubles:magic_mirror", Text.translatable("item.kubejs.tooltip.bountifulbaubles.recall").color(Color.CYAN_DYE));

    // 渊镜
    event.add("bountifulbaubles:wormhole_mirror", Text.translatable("item.kubejs.tooltip.bountifulbaubles.wormhole").color(Color.CYAN_DYE));

    // 勾玉护符
    event.add("bountifulbaubles:phylactery_charm", Text.translatable("item.kubejs.tooltip.bountifulbaubles.recall").color(Color.CYAN_DYE));
    event.add("bountifulbaubles:phylactery_charm", Text.translatable("item.kubejs.tooltip.bountifulbaubles.phylactery_charm").gray());
});
