/**
 * 传送限制
 * 只允许的维度：主世界
 * @param {Internal.ItemClickedEventJS} event 事件对象
 */
function bountifulbaublesTeleportLimit(event)
{
    const player = event.getPlayer();

    // 空
    if (!player) return;
    // 是主世界
    if (player.level.isOverworld()) return;

    // 提示
    player.server.scheduleInTicks(1, () =>
    {
        player.tell(Text.translatable("tell.kubejs.tooltip.bountifulbaubles_teleport", player.name.getString()));
    });

    // 取消使用
    event.cancel();
}

// 回忆药水
ItemEvents.rightClicked("bountifulbaubles:potion_recall", event => bountifulbaublesTeleportLimit(event));

// 魔镜
ItemEvents.rightClicked("bountifulbaubles:magic_mirror", event => bountifulbaublesTeleportLimit(event));

// 虫洞药水
// ItemEvents.rightClicked("bountifulbaubles:potion_wormhole", event => bountifulbaublesTeleportLimit(event));

// 渊镜
ItemEvents.rightClicked("bountifulbaubles:wormhole_mirror", event => bountifulbaublesTeleportLimit(event));

// 勾玉护符（主动技能：右键使用）
ItemEvents.rightClicked("bountifulbaubles:phylactery_charm", event => bountifulbaublesTeleportLimit(event));
