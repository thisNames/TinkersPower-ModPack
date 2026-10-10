ItemEvents.modification(event =>
{
    const _this = id => "dreadsteel:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            // c.armorProtection = protection;
            // c.armorToughness = toughness;
        });
    };

    // 盔甲
    incArrmor(_this("dreadsteel_helmet"), 628, 0, 0);
    incArrmor(_this("dreadsteel_chestplate"), 888, 0, 0);
    incArrmor(_this("dreadsteel_leggings"), 728, 0, 0);
    incArrmor(_this("dreadsteel_boots"), 528, 0, 0);
    
    // 盾牌
    incArrmor(_this("dreadsteel_shield"), 3280, 0, 0);
});
