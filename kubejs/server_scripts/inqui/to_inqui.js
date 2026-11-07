// 前往：腐梦浮原（红色床）
BlockEvents.rightClicked("minecraft:red_bed", event =>
{
    // 不是主手
    if (event.hand.name() != "MAIN_HAND") return;

    // 手持物品
    const item = event.item;
    // 触发方块
    const block = event.block;
    // 玩家
    const player = event.player;

    // 空
    if (!player) return;
    // 手持物品必须是：腐梦时钟
    if (item.getId() != "inqui:bacterium_clock_dream") return;
    // 维度：主世界
    if (block.getDimension() != "minecraft:overworld") return;

    // 出发
    player.server.scheduleInTicks(1, () =>
    {
        player.teleportTo("inqui:dream", 0, 200, 0, 0, 0);
        // player.tell(`${player.name.getString()}前往：腐梦浮原`);
    });

    player.level.chun

    // 取消默认事件（防止直接睡觉、床爆炸）
    event.cancel();
});

// 前往：终焉菌庭（紫色的床）
BlockEvents.rightClicked("minecraft:purple_bed", event =>
{
    // 不是主手
    if (event.hand.name() != "MAIN_HAND") return;

    // 手持物品
    const item = event.getItem();
    // 触发方块
    const block = event.getBlock();
    // 玩家
    const player = event.getPlayer();

    // 空
    if (!player) return;
    // 手持物品必须是：菌庭暮时
    if (item.getId() != "inqui:bacterium_clock_finalitas") return;
    // 维度：腐梦浮原
    if (block.getDimension() != "inqui:dream") return;

    // 出发
    player.server.scheduleInTicks(1, () =>
    {
        player.teleportTo("inqui:finalitas", 0, 300, 0, 0, 0);
        // player.tell(`${player.name.getString()}前往：终焉菌庭`);
    });

    // 取消默认事件（防止直接睡觉、床爆炸）
    event.cancel();
});
