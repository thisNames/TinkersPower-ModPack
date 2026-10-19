ItemEvents.modification(event =>
{
    const _this = id => "block_factorys_bosses:" + id;

    // 骑士铁 盔甲
    incArrmor(event, _this("knight_helmet"), 138, 3, 1.5);
    incArrmor(event, _this("knight_chestplate"), 152, 6, 1.5);
    incArrmor(event, _this("knight_leggings"), 145, 5, 1.5);
    incArrmor(event, _this("knight_boots"), 128, 3, 1.5);

    // 火龙骨 盔甲
    incArrmor(event, _this("dragon_bones_chestplate"), 225, 8, 2);
    incArrmor(event, _this("dragon_bones_leggings"), 195, 6, 2);
    incArrmor(event, _this("dragon_bones_boots"), 187, 3, 2);
});
