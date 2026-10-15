MoreJSEvents.registerPotionBrewing(event =>
{
    // 先移除模组自带的两个硬编码酿造配方（输出是物品，故用 removeByCustom）
    event.removeByCustom(null, null, "bountifulbaubles:potion_recall");
    event.removeByCustom(null, null, "bountifulbaubles:potion_wormhole");

    // 回忆药水：顶部 界石碑卷轴 + 底部 粗制药水 -> 回忆药水(物品)
    event.addCustomBrewing(
        "waystones:warp_scroll",
        Item.of("minecraft:potion", "{Potion:\"minecraft:awkward\"}").weakNBT(),
        "bountifulbaubles:potion_recall"
    );

    // 虫洞药水：顶部 末影之眼 + 底部 回忆药水(物品) -> 虫洞药水(物品)
    event.addCustomBrewing(
        "minecraft:ender_eye",
        "bountifulbaubles:potion_recall",
        "bountifulbaubles:potion_wormhole"
    );
});
