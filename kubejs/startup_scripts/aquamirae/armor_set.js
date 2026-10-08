ItemEvents.modification(event =>
{
    const _this = id => "aquamirae:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 可怖
    incArrmor(_this("terrible_helmet"), 145, 4, 0);
    incArrmor(_this("terrible_chestplate"), 165, 6, 0);
    incArrmor(_this("terrible_leggings"), 155, 5, 0);
    incArrmor(_this("terrible_boots"), 140, 3, 0);

    // 深海
    incArrmor(_this("abyssal_tiara"), 182, 2, 0);
    incArrmor(_this("abyssal_helmet"), 182, 6, 3);
    incArrmor(_this("abyssal_chestplate"), 188, 4, 3);
    incArrmor(_this("abyssal_leggings"), 192, 4, 3);
    incArrmor(_this("abyssal_boots"), 172, 2, 3);

    // 潜水
    incArrmor(_this("three_bolt_helmet"), 192, 7, 2);
    incArrmor(_this("three_bolt_chestplate"), 215, 5, 2);
    incArrmor(_this("three_bolt_leggings"), 202, 5, 2);
    incArrmor(_this("three_bolt_boots"), 187, 4, 2);
});
