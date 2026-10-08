ItemEvents.modification(event =>
{
    const _this = id => "iceandfire:" + id;

    const incArrmor = (id, damage, protection, toughness) =>
    {
        event.modify(id, c =>
        {
            c.maxDamage = damage;
            c.armorProtection = protection;
            c.armorToughness = toughness;
        });
    };

    // 同系列多颜色/多品种、数值相同的批量处理
    const incArmorSet = (prefixes, helmet, chest, legs, boots) =>
    {
        prefixes.forEach(p =>
        {
            incArrmor(p + "_helmet", helmet[0], helmet[1], helmet[2]);
            incArrmor(p + "_chestplate", chest[0], chest[1], chest[2]);
            incArrmor(p + "_leggings", legs[0], legs[1], legs[2]);
            incArrmor(p + "_boots", boots[0], boots[1], boots[2]);
        });
    };

    // 银盔甲
    incArrmor(_this("armor_silver_metal_helmet"), 64, 4, 2);
    incArrmor(_this("armor_silver_metal_chestplate"), 64, 6, 2);
    incArrmor(_this("armor_silver_metal_leggings"), 64, 5, 2);
    incArrmor(_this("armor_silver_metal_boots"), 64, 3, 2);

    // 铜盔甲
    incArrmor(_this("armor_copper_metal_helmet"), 46, 1, 0);
    incArrmor(_this("armor_copper_metal_chestplate"), 52, 3, 0);
    incArrmor(_this("armor_copper_metal_leggings"), 45, 2, 0);
    incArrmor(_this("armor_copper_metal_boots"), 42, 1, 0);

    // 拟羊盔甲
    incArrmor(_this("sheep_helmet"), 42, 1, 0);
    incArrmor(_this("sheep_chestplate"), 62, 3, 0);
    incArrmor(_this("sheep_leggings"), 52, 4, 0);
    incArrmor(_this("sheep_boots"), 40, 2, 0);

    // 虫壳盔甲（沙褐/苍白/血红）
    incArmorSet(
        [
            _this("deathworm_yellow"),
            _this("deathworm_white"),
            _this("deathworm_red")
        ],
        [75, 2, 0], [86, 4, 0], [78, 3, 0], [66, 2, 0]
    );

    // 蚂甲盔甲（沙漠/丛林）
    incArmorSet(
        [
            _this("myrmex_desert"),
            _this("myrmex_jungle")
        ],
        [102, 3, 0], [125, 5, 0], [115, 4, 0], [110, 2, 0]
    );

    // // 龙钢盔甲（炎/霜/霆）（需要通过配置修改）
    // incArmorSet(
    //     [
    //         _this("dragonsteel_fire"),
    //         _this("dragonsteel_ice"),
    //         _this("dragonsteel_lightning")
    //     ],
    //     [320, 7, 6], [390, 10, 6], [340, 9, 6], [330, 6, 6]
    // );

    // 龙鳞盔甲（火龙：火红/沉金/翡绿/烬灰；冰龙：冰蓝/淞白/玉靓/黯银；电龙：电青/晶紫/铜赤/夜黑）
    incArmorSet(
        [
            _this("armor_red"),
            _this("armor_bronze"),
            _this("armor_green"),
            _this("armor_gray"),
            _this("armor_blue"),
            _this("armor_white"),
            _this("armor_sapphire"),
            _this("armor_silver"),
            _this("armor_electric"),
            _this("armor_amythest"),
            _this("armor_copper"),
            _this("armor_black")
        ],
        [220, 5, 3], [250, 7, 3], [240, 8, 3], [230, 5, 3]
    );

    // 潮卫盔甲（沉紫/赤红/海绿/蓝绿/深蓝/铜黄/蔚蓝）
    incArmorSet(
        [
            _this("tide_purple"),
            _this("tide_red"),
            _this("tide_green"),
            _this("tide_teal"),
            _this("tide_deepblue"),
            _this("tide_bronze"),
            _this("tide_blue")
        ],
        [125, 4, 2.5], [145, 8, 2.5], [132, 7, 2.5], [129, 4, 2.5]
    );

    // 食人妖皮甲（森林/雪地/山地）
    incArmorSet(
        [
            _this("forest_troll_leather"),
            _this("frost_troll_leather"),
            _this("mountain_troll_leather")
        ],
        [90, 2, 1], [110, 4, 1], [102, 6, 1], [92, 2, 1]
    );
});
