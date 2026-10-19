ItemEvents.modification(event =>
{
    const _this = id => "alexsmobs:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            // c.armorProtection = protection;
            // c.armorToughness = toughness;
        });
    };

    // 走鹃羽毛 盔甲
    incArrmor(_this("roadrunner_boots"), 98, 3, 0);

    // 鳄鱼鳞片 盔甲
    incArrmor(_this("crocodile_chestplate"), 182, 5, 1);

    // 和服 盔甲
    incArrmor(_this("unsettling_kimono"), 82, 3, 0);

    // 寒霜 盔甲
    incArrmor(_this("froststalker_helmet"), 77, 3, 0.5);
    
    // 岩壳 盔甲
    incArrmor(_this("rocky_chestplate"), 112, 5, 0.5);
    
    // 蜈蚣关节 盔甲
    incArrmor(_this("centipede_leggings"), 87, 6, 0.5);
});
