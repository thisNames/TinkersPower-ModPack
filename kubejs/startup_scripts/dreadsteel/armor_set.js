ItemEvents.modification(event =>
{
    const _this = id => "dreadsteel:" + id;

    // 惊悚钢 盔甲
    incArrmor(event, _this("dreadsteel_helmet"), 688, 0, 0);
    incArrmor(event, _this("dreadsteel_chestplate"), 888, 0, 0);
    incArrmor(event, _this("dreadsteel_leggings"), 728, 0, 0);
    incArrmor(event, _this("dreadsteel_boots"), 628, 0, 0);
    
    // 盾牌
    incArrmor(event, _this("dreadsteel_shield"), 3280, 0, 0);
});
