ItemEvents.modification(event =>
{
    const _this = id => "protection_pixel:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 胸甲
    incArrmor(_this("wingsofprism_chestplate"), 325, 1, 0);
    incArrmor(_this("workerhornet_chestplate"), 325, 1, 0);
    incArrmor(_this("magneticstorm_chestplate"), 325, 1, 0);
    incArrmor(_this("pioneer_chestplate"), 325, 1, 0);
    incArrmor(_this("hellsnake_chestplate"), 325, 1, 0);
    incArrmor(_this("typhoon_chestplate"), 325, 1, 0);
    incArrmor(_this("breakeras_chestplate"), 325, 1, 0);
    incArrmor(_this("breaker_chestplate"), 325, 1, 0);
    incArrmor(_this("workerhornetas_chestplate"), 325, 1, 0);
    incArrmor(_this("magneticstormas_chestplate"), 325, 1, 0);
    incArrmor(_this("hellsnakeas_chestplate"), 325, 1, 0);
    incArrmor(_this("typhoonas_chestplate"), 325, 1, 0);
    incArrmor(_this("floatshield_chestplate"), 325, 1, 0);
    incArrmor(_this("tosaki_chestplate"), 325, 1, 0);
    incArrmor(_this("pioneeras_chestplate"), 325, 1, 0);
    incArrmor(_this("wingsofprismas_chestplate"), 325, 1, 0);
    incArrmor(_this("falconnest_chestplate"), 325, 1, 0);
    incArrmor(_this("falconnestas_chestplate"), 325, 1, 0);

    // 镶板
    incArrmor(_this("linkplate_chestplate"), 225, 6, 4);
    
    // 头盔
    incArrmor(_this("plague_helmet"), 185, 1, 0);
    incArrmor(_this("lancer_helmet"), 185, 1, 0);
    incArrmor(_this("hammer_helmet"), 185, 1, 0);
    incArrmor(_this("hunter_helmet"), 185, 1, 0);
    incArrmor(_this("closed_helmet"), 185, 1, 0);
    incArrmor(_this("bloodprisoner_helmet"), 185, 1, 0);
    incArrmor(_this("nightdemon_helmet"), 185, 1, 0);
    incArrmor(_this("plagueas_helmet"), 185, 1, 0);
    incArrmor(_this("lanceras_helmet"), 185, 1, 0);
    incArrmor(_this("hammeras_helmet"), 185, 1, 0);
    incArrmor(_this("hunteras_helmet"), 185, 1, 0);
    incArrmor(_this("closedas_helmet"), 185, 1, 0);
    incArrmor(_this("bloodprisoneras_helmet"), 185, 1, 0);
    incArrmor(_this("nightdemonas_helmet"), 185, 1, 0);
});
