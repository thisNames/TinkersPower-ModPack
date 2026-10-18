MoreJSEvents.registerPotionBrewing(event =>
{
    // minecraft:thick：浓稠
    // minecraft:awkward：粗制
    // minecraft:mundane：平凡

    // 寒
    event.removeByPotion(null, null, "toughasnails:ice_resistance");

    event.addPotionBrewing("tp_armorunder:freeze_powder", "minecraft:awkward", "toughasnails:ice_resistance");
    event.addPotionBrewing("biomesoplenty:icy_iris", "minecraft:awkward", "toughasnails:ice_resistance");
    event.addPotionBrewing("aquamirae:ship_graveyard_echo", "minecraft:awkward", "toughasnails:ice_resistance");
});
