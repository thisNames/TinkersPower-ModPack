ItemEvents.modification(event =>
{
    const _this = id => "cataclysm:" + id;

    // 腾炎铁 盔甲
    incArrmor(event, _this("ignitium_helmet"), 345, 6, 4);
    incArrmor(event, _this("ignitium_chestplate"), 425, 10, 4);
    incArrmor(event, _this("ignitium_elytra_chestplate"), 425, 10, 3);
    incArrmor(event, _this("ignitium_leggings"), 375, 7, 4);
    incArrmor(event, _this("ignitium_boots"), 385, 5, 4);

    // 花岩 盔甲
    incArrmor(event, _this("bloom_stone_pauldrons"), 256, 7, 2);

    // 恶兽钢 盔甲
    incArrmor(event, _this("monstrous_helm"), 245, 3, 3);

    // 咒魂铁 盔甲
    incArrmor(event, _this("cursium_helmet"), 344, 5, 4);
    incArrmor(event, _this("cursium_chestplate"), 424, 10, 4);
    incArrmor(event, _this("cursium_leggings"), 373, 7, 4);
    incArrmor(event, _this("cursium_boots"), 382, 5, 4);

    // 骸龙骨 盔甲
    incArrmor(event, _this("bone_reptile_helmet"), 340, 6, 2.5);
    incArrmor(event, _this("bone_reptile_chestplate"), 420, 10, 2.5);
});
