ItemEvents.tooltip(event =>
{
    // 献祭匕首
    event.addAdvanced("macabre:sacrificial_dirk", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.sacrificial_dirk").red());
    });

    // 晶化血
    event.addAdvanced("macabre:crystalized_blood", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.crystalized_blood").red());
    });

    // 裂开的晶化血
    event.addAdvanced("macabre:cracked_crystalized_blood", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.cracked_crystalized_blood").red());
    });

    // 血瓶
    event.add("macabre:blood_bottle_item", Text.translatable("tooltip.macabre.blood_bottle_item").red());

    // 饮湿者
    event.add("macabre:moistdrinker", Text.translatable("tooltip.macabre.moistdrinker"));

    // 侧眼
    event.add("macabre:sideye", Text.translatable("tooltip.macabre.sideye").gold());

    // 浸血巨刃
    event.addAdvanced("macabre:hemorrhage_sword", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.hemorrhage_sword").red());
        text.set(2, Text.translatable("tooltip.macabre.hemorrhage_sword.1").gold());
        text.set(3, Text.translatable("tooltip.macabre.hemorrhage_sword.2").lightPurple());
    });

    // 浸血巨镰
    event.addAdvanced("macabre:true_gorescythe", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.true_gorescythe").red());
        text.set(2, Text.translatable("tooltip.macabre.true_gorescythe.1").gold());
        text.set(3, Text.translatable("tooltip.macabre.true_gorescythe.2").lightPurple());
    });

    // 寄生之根
    event.addAdvanced("macabre:rootofinfestation", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.rootofinfestation").gold());
    });

    // 发光粉刺
    event.addAdvanced("macabre:glowing_pimple", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.glowing_pimple").white());
    });

    // 灼烧火把
    event.addAdvanced("macabre:scorching_torch", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.scorching_torch").yellow());
    });

    // 亡者精华
    event.addAdvanced("macabre:mortis_essence", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.mortis_essence").lightPurple());
    });

    // 巴尔之心
    event.addAdvanced("macabre:baal_heart", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.baal_heart").red());
    });

    // 戈莫瑞亚之心
    event.addAdvanced("macabre:gomoria_heart", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.gomoria_heart").lightPurple());
    });

    // 瓦拉蒙之心
    event.addAdvanced("macabre:valamon_heart", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.valamon_heart").gold());
    });

    // 加加莫之心
    event.addAdvanced("macabre:gargamaw_heart", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.gargamaw_heart").green());
    });

    // 莫菲格之心
    event.addAdvanced("macabre:morphegor_heart", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.morphegor_heart").gray());
    });

    // 巴尔的诅咒护甲
    event.addAdvanced("macabre:baal_pack", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.baal_pack").red());
    });

    // 戈莫瑞亚的腐朽护甲
    event.addAdvanced("macabre:gomoria_pack", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.gomoria_pack").lightPurple());
    });

    // 瓦拉蒙的裂甲
    event.addAdvanced("macabre:valamon_pack", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.valamon_pack").gold());
    });

    // 加加莫的腐臭护甲
    event.addAdvanced("macabre:gargamaw_pack", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.gargamaw_pack").green());
    });

    // 莫菲格的分裂护甲
    event.addAdvanced("macabre:morphegor_pack", (item, advanced, text) =>
    {
        text.set(1, Text.translatable("tooltip.macabre.morphegor_pack").gray());
    });

});
