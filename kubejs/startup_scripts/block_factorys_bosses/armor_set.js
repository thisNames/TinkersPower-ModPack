ItemEvents.modification(event =>
{
    const _this = id => "block_factorys_bosses:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 骑士
    incArrmor(_this("knight_helmet"), 138, 3, 1.5);
    incArrmor(_this("knight_chestplate"), 152, 6, 1.5);
    incArrmor(_this("knight_leggings"), 145, 5, 1.5);
    incArrmor(_this("knight_boots"), 128, 3, 1.5);

    // 龙骨
    incArrmor(_this("dragon_bones_chestplate"), 225, 8, 2);
    incArrmor(_this("dragon_bones_leggings"), 195, 6, 2);
    incArrmor(_this("dragon_bones_boots"), 187, 3, 2);
});
