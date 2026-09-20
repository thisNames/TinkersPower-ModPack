ItemEvents.tooltip(event =>
{
    const _this = id => "tp_armorunder:" + id;

    // 奥兹内衬
    event.add(_this("auto_helmet_liner"), Text.yellow("自动恒温！这么神奇？"));
    event.add(_this("auto_chestplate_liner"), Text.yellow("自动恒温！这么神奇？"));
    event.add(_this("auto_leggings_liner"), Text.yellow("自动恒温！这么神奇？"));
    event.add(_this("auto_boots_liner"), Text.yellow("自动恒温！这么神奇？"));

    // 保温内衬
    event.add(_this("beekeeper_helmet_liner"), Text.red("穿起来热热的！"));
    event.add(_this("beekeeper_chestplate_liner"), Text.red("穿起来热热的！"));
    event.add(_this("beekeeper_leggings_liner"), Text.red("穿起来热热的！"));
    event.add(_this("beekeeper_boots_liner"), Text.red("穿起来热热的！"));

    // 降温内衬
    event.add(_this("cool_helmet_liner"), Text.blue("穿起来冰冰凉凉！"));
    event.add(_this("cool_chestplate_liner"), Text.blue("穿起来冰冰凉凉！"));
    event.add(_this("cool_leggings_liner"), Text.blue("穿起来冰冰凉凉！"));
    event.add(_this("cool_boots_liner"), Text.blue("穿起来冰冰凉凉！"));
});
