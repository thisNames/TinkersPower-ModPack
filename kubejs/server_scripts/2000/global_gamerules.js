/**
 * 全局游戏规则
 */

ServerEvents.loaded(event =>
{
    const server = event.getServer();
    
    // 关闭 debug 调试信息（坐标、碰撞箱、群系等）
    server.runCommandSilent("gamerule reducedDebugInfo true");
});
