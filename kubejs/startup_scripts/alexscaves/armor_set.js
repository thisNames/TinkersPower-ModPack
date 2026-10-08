ItemEvents.modification(event =>
{
    const _this = id => "alexscaves:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 黑暗
    incArrmor(_this("hood_of_darkness"), 175, 4, 0.5);
    incArrmor(_this("cloak_of_darkness"), 195, 5, 0.5);

    // 姜饼
    incArrmor(_this("gingerbread_helmet"), 72, 1, 0);
    incArrmor(_this("gingerbread_chestplate"), 82, 1, 0);
    incArrmor(_this("gingerbread_leggings"), 62, 1, 0);
    incArrmor(_this("gingerbread_boots"), 52, 1, 0);

    // 防化
    incArrmor(_this("hazmat_mask"), 162, 2, 0.5);
    incArrmor(_this("hazmat_chestplate"), 182, 4, 0.5);
    incArrmor(_this("hazmat_leggings"), 172, 5, 0.5);
    incArrmor(_this("hazmat_boots"), 158, 2, 0.5);

    // 潜水
    incArrmor(_this("diving_mask"), 102, 2, 0);
    incArrmor(_this("diving_chestplate"), 128, 6, 0);
    incArrmor(_this("diving_leggings"), 118, 5, 0);
    incArrmor(_this("diving_boots"), 110, 2, 0);
});
