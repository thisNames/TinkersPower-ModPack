ItemEvents.modification(event =>
{
    const _this = id => "twilightforest:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 铁木
    incArrmor(_this("ironwood_helmet"), 82, 2, 0);
    incArrmor(_this("ironwood_chestplate"), 88, 7, 0);
    incArrmor(_this("ironwood_leggings"), 92, 5, 0);
    incArrmor(_this("ironwood_boots"), 87, 3, 0);

    // 钢叶
    incArrmor(_this("steeleaf_helmet"), 72, 3, 0);
    incArrmor(_this("steeleaf_chestplate"), 85, 8, 0);
    incArrmor(_this("steeleaf_leggings"), 88, 6, 0);
    incArrmor(_this("steeleaf_boots"), 82, 2, 0);

    // 骑士
    incArrmor(_this("knightmetal_helmet"), 102, 3, 1);
    incArrmor(_this("knightmetal_chestplate"), 125, 8, 1);
    incArrmor(_this("knightmetal_leggings"), 110, 6, 1);
    incArrmor(_this("knightmetal_boots"), 105, 3, 1);

    // 炽热
    incArrmor(_this("fiery_helmet"), 162, 3, 2);
    incArrmor(_this("fiery_chestplate"), 182, 8, 2);
    incArrmor(_this("fiery_leggings"), 172, 7, 2);
    incArrmor(_this("fiery_boots"), 152, 4, 2);

    // 极地
    incArrmor(_this("arctic_helmet"), 128, 2, 1.5);
    incArrmor(_this("arctic_chestplate"), 132, 7, 1.5);
    incArrmor(_this("arctic_leggings"), 112, 6, 1.5);
    incArrmor(_this("arctic_boots"), 105, 2, 1.5);

    // 雪怪
    incArrmor(_this("yeti_helmet"), 192, 4, 2);
    incArrmor(_this("yeti_chestplate"), 215, 7, 2);
    incArrmor(_this("yeti_leggings"), 202, 6, 2);
    incArrmor(_this("yeti_boots"), 187, 3, 2);

    // 幻影
    incArrmor(_this("phantom_helmet"), 182, 3, 3);
    incArrmor(_this("phantom_chestplate"), 197, 5, 3);

    // 娜迦
    incArrmor(_this("naga_chestplate"), 168, 6, 0.5);
    incArrmor(_this("naga_leggings"), 152, 7, 0.5);
});
