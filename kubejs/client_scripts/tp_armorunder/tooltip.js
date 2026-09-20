ItemEvents.tooltip(event =>
{
    const _this = id => "tp_armorunder:" + id;

    // 奥兹内衬
    const auto_text = Text.yellow("自动恒温！");
    event.add(_this("auto_helmet_liner"), auto_text);
    event.add(_this("auto_chestplate_liner"), auto_text);
    event.add(_this("auto_leggings_liner"), auto_text);
    event.add(_this("auto_boots_liner"), auto_text);

    // 保温内衬
    const beekeeper_text = Text.red("穿起来热热的！");
    event.add(_this("beekeeper_helmet_liner"), beekeeper_text);
    event.add(_this("beekeeper_chestplate_liner"), beekeeper_text);
    event.add(_this("beekeeper_leggings_liner"), beekeeper_text);
    event.add(_this("beekeeper_boots_liner"), beekeeper_text);

    // 降温内衬
    const cool_text = Text.blue("穿起来冰冰凉凉！");
    event.add(_this("cool_helmet_liner"), cool_text);
    event.add(_this("cool_chestplate_liner"), cool_text);
    event.add(_this("cool_leggings_liner"), cool_text);
    event.add(_this("cool_boots_liner"), cool_text);
});
