// 工具
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
        "tinkers_things:shovel",
        "tinkers_things:halberd",
        "tinkers_things:shortbow",
        "tinkers_things:blockram",
        "tinkers_things:amethyst_staff"
    ]);
});


// 装备
ServerEvents.tags("item", event =>
{
    event.add("c:hidden_from_recipe_viewers", [
        // 盾牌
        "tinkers_things:laminar_shield",
        // 层板套装
        "tinkers_things:laminar_helmet",
        "tinkers_things:laminar_chestplate",
        "tinkers_things:laminar_leggings",
        "tinkers_things:laminar_boots"
    ]);
});
