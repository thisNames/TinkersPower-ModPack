ItemEvents.modification(event =>
{
    const _this = id => "minecraft:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 皮革
    incArrmor(_this("leather_helmet"), 45, 1, 0);
    incArrmor(_this("leather_chestplate"), 65, 2, 0);
    incArrmor(_this("leather_leggings"), 55, 1, 0);
    incArrmor(_this("leather_boots"), 40, 1, 0);

    // 锁链
    incArrmor(_this("chainmail_helmet"), 82, 2, 0);
    incArrmor(_this("chainmail_chestplate"), 88, 3, 0);
    incArrmor(_this("chainmail_leggings"), 92, 2, 0);
    incArrmor(_this("chainmail_boots"), 90, 1, 0);

    // 铁
    incArrmor(_this("iron_helmet"), 82, 3, 0);
    incArrmor(_this("iron_chestplate"), 88, 6, 0);
    incArrmor(_this("iron_leggings"), 92, 4, 0);
    incArrmor(_this("iron_boots"), 90, 2, 0);

    // 金
    incArrmor(_this("golden_helmet"), 32, 5, 2);
    incArrmor(_this("golden_chestplate"), 32, 6, 2);
    incArrmor(_this("golden_leggings"), 32, 4, 2);
    incArrmor(_this("golden_boots"), 32, 3, 2);

    // 钻石
    incArrmor(_this("diamond_helmet"), 163, 4, 2);
    incArrmor(_this("diamond_chestplate"), 182, 7, 2);
    incArrmor(_this("diamond_leggings"), 173, 5, 2);
    incArrmor(_this("diamond_boots"), 168, 4, 2);

    // 下届合金
    incArrmor(_this("netherite_helmet"), 192, 5, 3);
    incArrmor(_this("netherite_chestplate"), 215, 8, 3);
    incArrmor(_this("netherite_leggings"), 202, 6, 3);
    incArrmor(_this("netherite_boots"), 187, 4, 3);

    // 海龟帽
    incArrmor(_this("turtle_helmet"), 75, 2, 1);
});
