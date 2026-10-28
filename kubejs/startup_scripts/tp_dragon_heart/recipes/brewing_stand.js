StartupEvents.registry("potion", event =>
{
    const $PotionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder");
    const _idb = id => "if_dragon_blessings:" + id;

    // 能力效果
    [
        "fire_attack",
        "ice_attack",
        "lightning_attack",
        "blaze",
        "frozen",
        "shocked"
    ].forEach(effect =>
    {
        let baseEffect = _idb(effect);
        let long = _idb("long_" + effect);
        let strong = _idb("strong_" + effect);

        // 基础
        event.createCustom(baseEffect, () =>
        {
            return new $PotionBuilder(baseEffect)
                .effect(baseEffect, 1200, 0)
                .createObject();
        });

        // 时长
        event.createCustom(long, () =>
        {
            return new $PotionBuilder(baseEffect)
                .effect(baseEffect, 2400, 0)
                .createObject();
        });

        // 升级
        event.createCustom(strong, () =>
        {
            return new $PotionBuilder(baseEffect)
                .effect(baseEffect, 600, 1)
                .createObject();
        });
    });
});

MoreJSEvents.registerPotionBrewing(event =>
{
    // 火
    event.addPotionBrewing("iceandfire:fire_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:fire_attack");
    // 火：时长
    event.addPotionBrewing("xat:glowing_powder", "if_dragon_blessings:fire_attack", "if_dragon_blessings:long_fire_attack");
    // 火：等级
    event.addPotionBrewing("iceandfire:fire_lily", "if_dragon_blessings:fire_attack", "if_dragon_blessings:strong_fire_attack");

    // 冰
    event.addPotionBrewing("iceandfire:ice_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:ice_attack");
    // 冰：时长
    event.addPotionBrewing("xat:glowing_powder", "if_dragon_blessings:ice_attack", "if_dragon_blessings:long_ice_attack");
    // 冰：等级
    event.addPotionBrewing("iceandfire:frost_lily", "if_dragon_blessings:ice_attack", "if_dragon_blessings:strong_ice_attack");

    // 电
    event.addPotionBrewing("iceandfire:lightning_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:lightning_attack");
    // 电：时长
    event.addPotionBrewing("xat:glowing_powder", "if_dragon_blessings:lightning_attack", "if_dragon_blessings:long_lightning_attack");
    // 电：等级
    event.addPotionBrewing("iceandfire:lightning_lily", "if_dragon_blessings:lightning_attack", "if_dragon_blessings:strong_lightning_attack");

    // 烈焰
    event.addPotionBrewing("iceandfire:fire_dragon_blood", "potioncore:rust", "if_dragon_blessings:blaze");
    // 烈焰：时长
    event.addPotionBrewing("minecraft:redstone", "if_dragon_blessings:blaze", "if_dragon_blessings:long_blaze");
    // 烈焰：等级
    event.addPotionBrewing("minecraft:glowstone_dust", "if_dragon_blessings:blaze", "if_dragon_blessings:strong_blaze");

    // 冰封
    event.addPotionBrewing("iceandfire:ice_dragon_blood", "potioncore:rust", "if_dragon_blessings:frozen");
    // 冰封：时长
    event.addPotionBrewing("minecraft:redstone", "if_dragon_blessings:frozen", "if_dragon_blessings:long_frozen");
    // 冰封：等级
    event.addPotionBrewing("minecraft:glowstone_dust", "if_dragon_blessings:frozen", "if_dragon_blessings:strong_frozen");

    // 感电
    event.addPotionBrewing("iceandfire:lightning_dragon_blood", "potioncore:rust", "if_dragon_blessings:shocked");
    // 感电：时长
    event.addPotionBrewing("minecraft:redstone", "if_dragon_blessings:shocked", "if_dragon_blessings:long_shocked");
    // 感电：等级
    event.addPotionBrewing("minecraft:glowstone_dust", "if_dragon_blessings:shocked", "if_dragon_blessings:strong_shocked");
});
