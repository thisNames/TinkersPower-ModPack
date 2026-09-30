// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();

    event.add([
        "tinkers_thinking:paxel",
        "tinkers_thinking:knife",
        "tinkers_thinking:mace",
        "tinkers_thinking:arrow_thrower",
        "tinkers_thinking:cutlass",
        "tinkers_thinking:repeating_crossbow",
        "tinkers_thinking:amethyst_staff",
        "tinkers_thinking:quartz_staff"
    ], text)
});
