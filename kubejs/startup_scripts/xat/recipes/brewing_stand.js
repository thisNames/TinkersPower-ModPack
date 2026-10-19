MoreJSEvents.registerPotionBrewing(event =>
{
    // minecraft:thick：浓稠
    // minecraft:awkward：粗制
    // minecraft:mundane：平凡

    // 抗火（原版）
    event.addPotionBrewing("iceandfire:fire_dragon_blood", "minecraft:awkward", "minecraft:fire_resistance");
    event.addPotionBrewing("iceandfire:fire_lily", "minecraft:awkward", "minecraft:fire_resistance");

    // 抗寒
    event.addPotionBrewing("iceandfire:ice_dragon_blood", "minecraft:awkward", "xat:ice_resistance");
    event.addPotionBrewing("iceandfire:frost_lily", "minecraft:awkward", "xat:ice_resistance");
    // 抗寒：时长
    event.addPotionBrewing("minecraft:redstone", "xat:ice_resistance", "xat:extended_ice_resistance");

    // 抗雷
    event.addPotionBrewing("iceandfire:lightning_dragon_blood", "minecraft:awkward", "xat:lightning_resistance");
    event.addPotionBrewing("iceandfire:lightning_lily", "minecraft:awkward", "xat:lightning_resistance");
    // 抗雷：时长
    event.addPotionBrewing("minecraft:redstone", "xat:lightning_resistance", "xat:extended_lightning_resistance");

    // 人类
    event.addPotionBrewing("xat:restoration_serum", "potioncore:magic_focus", "xat:human");
    // 人类：时长
    event.addPotionBrewing("xat:glowing_powder", "xat:human", "xat:extended_human");

    // 仙女
    event.addPotionBrewing("xat:fairy_dew", "potioncore:magic_focus", "xat:fairy");
    // 仙女：时长
    event.addPotionBrewing("minecraft:ghast_tear", "xat:fairy", "xat:extended_fairy");
    event.addPotionBrewing("xat:glowing_gem", "xat:fairy", "xat:extended_fairy");

    // 矮人
    event.addPotionBrewing("xat:dwarf_stout", "potioncore:magic_focus", "xat:dwarf");
    // 矮人：时长
    event.addPotionBrewing("xat:glowing_powder", "xat:dwarf", "xat:extended_dwarf");

    // 泰坦
    event.addPotionBrewing("xat:titan_spirit", "potioncore:magic_focus", "xat:titan");
    // 泰坦：时长
    event.addPotionBrewing("minecraft:netherite_ingot", "xat:titan", "xat:extended_titan");
    event.addPotionBrewing("xat:glowing_gem", "xat:titan", "xat:extended_titan");

    // 哥布林
    event.addPotionBrewing("xat:goblin_soup", "potioncore:magic_focus", "xat:goblin");
    // 哥布林：时长
    event.addPotionBrewing("xat:glowing_powder", "xat:goblin", "xat:extended_goblin");

    // 精灵
    event.addPotionBrewing("xat:elf_sap", "potioncore:magic_focus", "xat:elf");
    // 精灵：时长
    event.addPotionBrewing("iceandfire:pixie_dust", "xat:elf", "xat:extended_elf");
    event.addPotionBrewing("xat:glowing_gem", "xat:elf", "xat:extended_elf");

    // 猫灵
    event.addPotionBrewing("xat:faelis_food", "potioncore:magic_focus", "xat:faelis");
    // 猫灵：时长
    event.addPotionBrewing("xat:faelis_claw", "xat:faelis", "xat:extended_faelis");
    event.addPotionBrewing("iceandfire:hippogryph_talon", "xat:faelis", "xat:extended_faelis");
    event.addPotionBrewing("xat:glowing_gem", "xat:faelis", "xat:extended_faelis");

    // 牛头人
    event.addPotionBrewing("xat:taurus_tea", "potioncore:magic_focus", "xat:taurus");
    // 牛头人：时长
    event.addPotionBrewing("twilightforest:meef_stroganoff", "xat:taurus", "xat:extended_taurus");
    event.addPotionBrewing("xat:glowing_gem", "xat:taurus", "xat:extended_taurus");

    // 巨龙
    event.addCustomBrewing(
        Item.of("xat:dragon_gem", "{Elements:{primary:\"xat:neutral\"}}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"potioncore:magic_focus\"}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"xat:dragon\"}").weakNBT()
    );
    // 巨龙：时长
    event.addPotionBrewing("minecraft:dragon_breath", "xat:dragon", "xat:extended_dragon");
    event.addPotionBrewing("xat:glowing_gem", "xat:dragon", "xat:extended_dragon");

    // 火龙
    event.addCustomBrewing(
        Item.of("xat:dragon_gem", "{Elements:{primary:\"xat:fire\"}}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"potioncore:magic_focus\"}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"xat:dragon_fire\"}").weakNBT()
    );
    // 火龙：时长
    event.addPotionBrewing("iceandfire:fire_dragon_blood", "xat:dragon_fire", "xat:extended_dragon_fire");
    event.addPotionBrewing("xat:glowing_gem", "xat:dragon_fire", "xat:extended_dragon_fire");

    // 冰龙
    event.addCustomBrewing(
        Item.of("xat:dragon_gem", "{Elements:{primary:\"xat:ice\"}}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"potioncore:magic_focus\"}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"xat:dragon_ice\"}").weakNBT()
    );
    // 冰龙：时长
    event.addPotionBrewing("iceandfire:ice_dragon_blood", "xat:dragon_ice", "xat:extended_dragon_ice");
    event.addPotionBrewing("xat:glowing_gem", "xat:dragon_ice", "xat:extended_dragon_ice");

    // 电龙
    event.addCustomBrewing(
        Item.of("xat:dragon_gem", "{Elements:{primary:\"xat:lightning\"}}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"potioncore:magic_focus\"}").weakNBT(),
        Item.of("minecraft:potion", "{Potion:\"xat:dragon_lightning\"}").weakNBT()
    );
    // 电龙：时长
    event.addPotionBrewing("iceandfire:lightning_dragon_blood", "xat:dragon_lightning", "xat:extended_dragon_lightning");
    event.addPotionBrewing("xat:glowing_gem", "xat:dragon_lightning", "xat:extended_dragon_lightning");
});
