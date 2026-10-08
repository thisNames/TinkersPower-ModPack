ServerEvents.tags("block", event =>
{
    const _this = id => "iceandfire:" + id;

    // 外在温度：方块
    const hot_block = "toughasnails:heating_blocks";
    const cool_block = "toughasnails:cooling_blocks";

    // 热
    [
        _this("fire_lily"),
        _this("dragonforge_fire_core"),
        _this("dragonforge_fire_core_disabled"),
        _this("dragonsteel_fire_block")
    ].forEach(item =>
    {
        event.add(hot_block, item);
    });

    // 冷
    [
        _this("frozen_grass"),
        _this("frozen_dirt"),
        _this("frozen_stone"),
        _this("frozen_cobblestone"),
        _this("frozen_gravel"),
        _this("frozen_dirt_path"),
        _this("frozen_splinters"),
        _this("dragon_ice"),
        _this("dragon_ice_spikes"),
        _this("frost_lily"),
        _this("dragonforge_ice_core"),
        _this("dragonforge_ice_core_disabled"),
        _this("dragonsteel_ice_block"),
        _this("dread_torch")
    ].forEach(item =>
    {
        event.add(cool_block, item);
    });
});
