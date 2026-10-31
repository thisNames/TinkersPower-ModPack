MoreJSEvents.registerPotionBrewing(event =>
{
    // minecraft:thick：浓稠
    // minecraft:awkward：粗制
    // minecraft:mundane：平凡

    // 解毒
    event.addPotionBrewing("quark:charcoal_block", "minecraft:awkward", "potioncore:antidote");

    // 纯洁
    event.addPotionBrewing("minecraft:wither_skeleton_skull", "minecraft:awkward", "potioncore:purity");
    event.addPotionBrewing("tconstruct:necrotic_bone", "minecraft:awkward", "potioncore:purity");
    event.addPotionBrewing("iceandfire:witherbone", "minecraft:awkward", "potioncore:purity");

    // 飞行
    // event.addPotionBrewing("minecraft:elytra", "minecraft:awkward", "potioncore:flight");
    // event.addPotionBrewing("tide:elytrout", "minecraft:awkward", "potioncore:flight");
    // event.addPotionBrewing("iceandfire:pixie_dust", "minecraft:slow_falling", "potioncore:flight");

    // 混乱
    event.addPotionBrewing("alexscaves:scarlet_neodymium_ingot", "minecraft:mundane", "potioncore:perplexity");
    event.addPotionBrewing("alexscaves:azure_neodymium_ingot", "minecraft:mundane", "potioncore:perplexity");

    // 急迫
    event.addPotionBrewing("minecraft:gold_block", "minecraft:awkward", "potioncore:haste");

    // 挖掘疲劳
    event.addPotionBrewing("minecraft:blue_ice", "minecraft:thick", "potioncore:fatigue");

    // 箭术
    event.addPotionBrewing("iceandfire:stymphalian_arrow", "minecraft:awkward", "potioncore:archery");

    // 笨拙
    event.addPotionBrewing("minecraft:arrow", "minecraft:thick", "potioncore:klutz");

    // 魔力聚焦
    event.addPotionBrewing("xat:mana_crystal", "potioncore:magic_inhibition", "potioncore:magic_focus");
    // 魔力聚焦：鱼
    event.addPotionBrewing("tide:shooting_starfish", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("tide:midas_fish", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("tide:devils_hole_pupfish", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("tide:dragon_fish", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("stardew_fishing:golden_snook", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("stardew_fishing:storm_tarpon", "minecraft:awkward", "potioncore:magic_focus");
    event.addPotionBrewing("stardew_fishing:blazing_oarfish", "minecraft:awkward", "potioncore:magic_focus");

    // 魔力压制
    event.addPotionBrewing("biomeswevegone:blue_enchanted_sapling", "minecraft:awkward", "potioncore:magic_inhibition");
    event.addPotionBrewing("biomesoplenty:magic_sapling", "minecraft:awkward", "potioncore:magic_inhibition");
    event.addPotionBrewing("twilightforest:rainbow_oak_sapling", "minecraft:awkward", "potioncore:magic_inhibition");
    event.addPotionBrewing("twilightforest:transformation_sapling", "minecraft:awkward", "potioncore:magic_inhibition");
    event.addPotionBrewing("twilightforest:magic_map_focus", "minecraft:awkward", "potioncore:magic_inhibition");

    // 延伸
    event.addPotionBrewing("create:extendo_grip", "minecraft:thick", "potioncore:reach");
    event.addPotionBrewing("create:mechanical_arm", "minecraft:thick", "potioncore:reach");
    event.addPotionBrewing("create:deployer", "minecraft:thick", "potioncore:reach");

    // 荆棘
    event.addPotionBrewing("quark:cactus_block", "minecraft:mundane", "potioncore:recoil");

    // 修复
    event.addPotionBrewing("iceandfire:fire_dragon_heart", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("iceandfire:ice_dragon_heart", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("iceandfire:lightning_dragon_heart", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("iceandfire:hydra_heart", "minecraft:awkward", "potioncore:repair");
    // 修复；鱼
    event.addPotionBrewing("tide:coelacanth", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("tide:alpha_fish", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("tide:voidseeker", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:goliath_grouper", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:vampire_payara", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:sabretoothed_tigerfish", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:chromatic_arapaima", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:cyclops_mahimahi", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:crystalline_snakehead", "minecraft:awkward", "potioncore:repair");
    event.addPotionBrewing("stardew_fishing:demon_gar", "minecraft:awkward", "potioncore:repair");


    // 腐蚀
    event.addPotionBrewing("alexscaves:sulfur_dust", "minecraft:thick", "potioncore:rust");

    // 稳固
    event.addPotionBrewing("minecraft:netherite_ingot", "minecraft:awkward", "potioncore:solid_core");

    // 晕头转向
    event.addPotionBrewing("minecraft:poisonous_potato", "minecraft:thick", "potioncore:spin");

    // 自动上阶
    event.addPotionBrewing("minecraft:piston", "minecraft:thick", "potioncore:step_up");

    // 脆弱
    event.addPotionBrewing("graveyard:corruption", "minecraft:awkward", "potioncore:vulnerable");

    // 反胃
    event.addPotionBrewing("minecraft:rotten_flesh", "minecraft:thick", "potioncore:nausea");

    // 运气
    // event.addPotionBrewing(, , "potioncore:chance");

    // 祝福
    // event.addPotionBrewing(, , "potioncore:bless");

    // 诅咒
    // event.addPotionBrewing(, , "potioncore:curse");

    // 净化
    event.addPotionBrewing("minecraft:milk_bucket", "potioncore:purity", "potioncore:cure");

    // 消散
    event.addPotionBrewing("twilightforest:raven_feather", "minecraft:thick", "potioncore:dispel");

    // 凋零
    event.addPotionBrewing("iceandfire:witherbone", "minecraft:thick", "potioncore:wither");

    // 繁衍
    event.addPotionBrewing("iceandfire:pixie_dust", "minecraft:awkward", "potioncore:love");

    // 铁肤
    event.addPotionBrewing("minecraft:iron_block", "minecraft:awkward", "potioncore:iron_skin");

    // 钻肤
    event.addPotionBrewing("minecraft:diamond_block", "minecraft:awkward", "potioncore:diamond_skin");

    // 破甲
    event.addPotionBrewing("create:crushing_wheel", "potioncore:iron_skin", "potioncore:broken_armor");

    // 攀爬
    event.addPotionBrewing("cataclysm:sticky_gloves", "minecraft:thick", "potioncore:climb");

    // 魔法护盾
    event.addPotionBrewing("xat:mana_candy", "potioncore:broken_magic_shield", "potioncore:magic_shield");

    // 魔法护盾破损
    event.addPotionBrewing("alexscaves:tesla_bulb", "minecraft:awkward", "potioncore:broken_magic_shield");

    // 溺水
    event.addPotionBrewing("aquamirae:fin", "minecraft:thick", "potioncore:drown");
    event.addPotionBrewing("aquamirae:esca", "minecraft:thick", "potioncore:drown");
    event.addPotionBrewing("aquamirae:sharp_bones", "minecraft:thick", "potioncore:drown");

    // 复活
    event.addPotionBrewing("minecraft:totem_of_undying", "minecraft:regeneration", "potioncore:revival");

    // 沉重
    event.addPotionBrewing("minecraft:anvil", "minecraft:thick", "potioncore:weight");
    event.addPotionBrewing("minecraft:chipped_anvil", "minecraft:thick", "potioncore:weight");
    event.addPotionBrewing("minecraft:damaged_anvil", "minecraft:thick", "potioncore:weight");
    event.addPotionBrewing("alexscaves:heavy_bone", "minecraft:thick", "potioncore:weight");

    // 引雷
    event.addPotionBrewing("minecraft:lightning_rod", "minecraft:thick", "potioncore:lightning");

    // 颠倒
    // event.addPotionBrewing(, , "potioncore:invert");

    // 自燃
    event.addPotionBrewing("minecraft:lava_bucket", "minecraft:thick", "potioncore:fire");

    // 延长
    // event.addPotionBrewing("vinery:red_wine", "minecraft:healing", "potioncore:extend");

    // 起跳
    event.addPotionBrewing("minecraft:dispenser", "minecraft:awkward", "potioncore:launch");

    // 爆炸
    event.addPotionBrewing("quark:gunpowder_sack", "minecraft:awkward", "potioncore:explosion");

    // 冲击
    event.addPotionBrewing("vinery:creepers_crush", "minecraft:awkward", "potioncore:burst");
    event.addPotionBrewing("minecraft:creeper_head", "minecraft:awkward", "potioncore:burst");

    // 随机传送
    event.addPotionBrewing("waystones:warp_dust", "potioncore:surface_teleport", "potioncore:random_teleport");

    // 地面传送
    event.addPotionBrewing("waystones:return_scroll", "minecraft:awkward", "potioncore:surface_teleport");

    // 回家
    // event.addPotionBrewing(, , "potioncore:spawn_teleport");
});
