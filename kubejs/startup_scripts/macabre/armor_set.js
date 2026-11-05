ItemEvents.modification(event =>
{
    const _this = id => "macabre:" + id;

    // 共生
    incArrmorDamage(event, _this("symbiotic_armor_helmet"), 550, 6, 3);
    incArrmorDamage(event, _this("symbiotic_armor_chestplate"), 600, 8, 3);
    incArrmorDamage(event, _this("symbiotic_armor_leggings"), 580, 7, 3);
    incArrmorDamage(event, _this("symbiotic_armor_boots"), 500, 5, 3);

    // 血凝
    incArrmorDamage(event, _this("blood_clot_armor_helmet"), 580, 7, 4);
    incArrmorDamage(event, _this("blood_clot_armor_chestplate"), 650, 9, 4);
    incArrmorDamage(event, _this("blood_clot_armor_leggings"), 630, 8, 4);
    incArrmorDamage(event, _this("blood_clot_armor_boots"), 550, 6, 4);

    // 血浆
    incArrmorDamage(event, _this("plasma_armor_helmet"), 600, 8, 5);
    incArrmorDamage(event, _this("plasma_armor_chestplate"), 670, 10, 5);
    incArrmorDamage(event, _this("plasma_armor_leggings"), 650, 9, 5);
    incArrmorDamage(event, _this("plasma_armor_boots"), 580, 7, 5);

    // 灰铁
    incArrmorDamage(event, _this("ferrum_armor_helmet"), 125, 4, 1.5);
    incArrmorDamage(event, _this("ferrum_armor_chestplate"), 150, 5, 1.5);
    incArrmorDamage(event, _this("ferrum_armor_leggings"), 135, 6, 1.5);
    incArrmorDamage(event, _this("ferrum_armor_boots"), 100, 3, 1.5);

    // 憎恨
    incArrmorDamage(event, _this("abhorrent_armor_helmet"), 670, 9, 2);
    incArrmorDamage(event, _this("abhorrent_armor_chestplate"), 750, 10, 2);
    incArrmorDamage(event, _this("abhorrent_armor_leggings"), 650, 12, 2);
    incArrmorDamage(event, _this("abhorrent_armor_boots"), 600, 8, 2);

    // 皮囊
    incArrmorDamage(event, _this("skinsuit_helmet"), 52, 2, 0);
    incArrmorDamage(event, _this("skinsuit_chestplate"), 75, 4, 0);
    incArrmorDamage(event, _this("skinsuit_leggings"), 60, 4, 0);
    incArrmorDamage(event, _this("skinsuit_boots"), 45, 2, 0);

    // boss 五件套
    // 巴尔
    incArrmorDamage(event, _this("baal_armor_helmet"), 720, 12, 7);
    incArrmorDamage(event, _this("baal_armor_chestplate"), 820, 15, 7);
    incArrmorDamage(event, _this("baal_armor_leggings"), 750, 14, 7);
    incArrmorDamage(event, _this("baal_armor_boots"), 700, 10, 7);

    // 戈莫瑞亚
    incArrmorDamage(event, _this("gomoria_armor_helmet"), 820, 11, 6);
    incArrmorDamage(event, _this("gomoria_armor_chestplate"), 920, 13, 6);
    incArrmorDamage(event, _this("gomoria_armor_leggings"), 850, 12, 6);
    incArrmorDamage(event, _this("gomoria_armor_boots"), 750, 10, 6);

    // 瓦拉蒙
    incArrmorDamage(event, _this("valamon_armor_helmet"), 850, 14, 6.5);
    incArrmorDamage(event, _this("valamon_armor_chestplate"), 950, 12, 6.5);
    incArrmorDamage(event, _this("valamon_armor_leggings"), 870, 10, 6.5);
    incArrmorDamage(event, _this("valamon_armor_boots"), 780, 9, 6.5);

    // 加加莫
    incArrmorDamage(event, _this("gargamaw_armor_helmet"), 720, 15, 7);
    incArrmorDamage(event, _this("gargamaw_armor_chestplate"), 800, 12, 6);
    incArrmorDamage(event, _this("gargamaw_armor_leggings"), 750, 14, 6);
    incArrmorDamage(event, _this("gargamaw_armor_boots"), 700, 10, 6);

    // 莫非格
    incArrmorDamage(event, _this("morphegor_armor_helmet"), 650, 10, 7);
    incArrmorDamage(event, _this("morphegor_armor_chestplate"), 750, 12, 7);
    incArrmorDamage(event, _this("morphegor_armor_leggings"), 700, 12, 7);
    incArrmorDamage(event, _this("morphegor_armor_boots"), 680, 10, 7);
});
