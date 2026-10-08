// 工具
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
        // 近战
        "tinkers_thinking:paxel",
        "tinkers_thinking:knife",
        "tinkers_thinking:mace",
        "tinkers_thinking:cutlass",
        // 远程
        "tinkers_thinking:arrow_thrower",
        "tinkers_thinking:repeating_crossbow",
        // 手杖
        "tinkers_thinking:amethyst_staff",
        "tinkers_thinking:quartz_staff"
    ]);
});
