// 工具
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
        // 近战
        "tinkers_ingenuity:meteor_spear",
        // 远程
        "tinkers_ingenuity:blowpipe",
        // 饰品
        "tinkers_ingenuity:tinkers_medal"
    ]);
});
