ItemEvents.modification(event =>
{
    const _this = id => "aquamirae:" + id;

    // 可怖鱼骨 盔甲
    incArrmor(event, _this("terrible_helmet"), 145, 4, 0);
    incArrmor(event, _this("terrible_chestplate"), 165, 6, 0);
    incArrmor(event, _this("terrible_leggings"), 155, 5, 0);
    incArrmor(event, _this("terrible_boots"), 140, 3, 0);

    // 深海重紫水晶 盔甲
    incArrmor(event, _this("abyssal_tiara"), 182, 2, 0);
    incArrmor(event, _this("abyssal_helmet"), 182, 6, 3);
    incArrmor(event, _this("abyssal_chestplate"), 188, 4, 3);
    incArrmor(event, _this("abyssal_leggings"), 192, 4, 3);
    incArrmor(event, _this("abyssal_boots"), 172, 2, 3);

    // 潜水重铜 盔甲
    incArrmor(event, _this("three_bolt_helmet"), 192, 7, 2);
    incArrmor(event, _this("three_bolt_chestplate"), 215, 5, 2);
    incArrmor(event, _this("three_bolt_leggings"), 202, 5, 2);
    incArrmor(event, _this("three_bolt_boots"), 187, 4, 2);
});
