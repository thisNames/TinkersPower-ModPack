ItemEvents.tooltip(event =>
{
    // 钥匙
    [
        "ba_bt:land_monolith_key",
        "ba_bt:ocean_monolith_key",
        "ba_bt:core_monolith_key",
        "ba_bt:nether_monolith_key",
        "ba_bt:end_monolith_key",
        "ba_bt:sky_monolith_key"
    ].forEach(item => event.add(item, Text.translatable("item.kubejs.tooltip.ba_bt.key").color(Color.CYAN_DYE)));
});
