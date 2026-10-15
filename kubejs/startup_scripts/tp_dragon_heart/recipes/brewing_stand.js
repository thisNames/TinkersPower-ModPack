StartupEvents.registry("potion", event =>
{
    const $PotionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder");
    const _idb = id => "if_dragon_blessings:" + id;

    // 能力效果
    [
        "fire_attack",
        "ice_attack",
        "lightning_attack"
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
    // 酿造配方
    event.addPotionBrewing("iceandfire:fire_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:fire_attack");
    event.addPotionBrewing("iceandfire:ice_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:ice_attack");
    event.addPotionBrewing("iceandfire:lightning_dragon_heart", "potioncore:magic_focus", "if_dragon_blessings:lightning_attack");
});
