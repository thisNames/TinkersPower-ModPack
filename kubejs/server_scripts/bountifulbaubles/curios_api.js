const bountifulbaubles_curios = {
    namespace: "bountifulbaubles",
    tag: "curios",
    items: [
        {
            id: "dark_egg",
            remove: ["curio"],
            add: []
        },
        {
            id: "drop_spindle",
            remove: ["curio"],
            add: []
        },
        {
            id: "fire_mind",
            remove: ["curio"],
            add: []
        },
        {
            id: "warm_void",
            remove: ["curio"],
            add: []
        },
        {
            id: "book_o_enchanting",
            remove: ["curio"],
            add: []
        },
        {
            id: "ice_shard",
            remove: ["curio"],
            add: []
        },
        {
            id: "dragon_breath",
            remove: ["curio"],
            add: []
        },
        {
            id: "minds_eye",
            remove: ["curio"],
            add: []
        },
        {
            id: "ruby_heart",
            remove: ["curio"],
            add: []
        },
        {
            id: "golden_skull",
            remove: ["curio"],
            add: []
        },
        {
            id: "starfish",
            remove: ["curio"],
            add: []
        },
        {
            id: "blaze_heart",
            remove: ["curio"],
            add: ["necklace", "charm", "body"]
        },
        {
            id: "serpent_tooth",
            remove: ["curio"],
            add: []
        },
        {
            id: "wither_nail",
            remove: ["curio"],
            add: []
        },
        {
            id: "turtle_shell",
            remove: ["curio"],
            add: []
        },
        {
            id: "mad_aura",
            remove: ["curio"],
            add: []
        },
        {
            id: "mossy_belt",
            remove: ["curio"],
            add: []
        },
        {
            id: "mossy_ring",
            remove: ["curio"],
            add: []
        },
        {
            id: "glory_shards",
            remove: ["curio"],
            add: []
        },
        {
            id: "butchers_cleaver",
            remove: ["curio"],
            add: []
        },
        {
            id: "curious_knuckles",
            remove: ["ring"],
            add: []
        },
        {
            id: "auto_torch",
            remove: ["belt", "charm"],
            add: []
        },
        {
            id: "karma",
            remove: ["curio"],
            add: []
        },
        {
            id: "golden_melon",
            remove: ["curio"],
            add: []
        },
        {
            id: "dark_dagger",
            remove: ["curio"],
            add: []
        },
        {
            id: "ember",
            remove: ["curio"],
            add: ["body"]
        },
        {
            id: "bottled_cloud",
            remove: ["belt"],
            add: []
        },
        {
            id: "oxalis",
            remove: ["curio"],
            add: []
        },
        {
            id: "luck_coin",
            remove: ["curio"],
            add: []
        },
        {
            id: "curious_ring",
            remove: ["ring"],
            add: []
        },
        {
            id: "curious_amulet",
            remove: ["necklace"],
            add: []
        },
        {
            id: "curious_crown",
            remove: ["head"],
            add: []
        },
        {
            id: "broken_heart",
            remove: ["ring"],
            add: []
        },
        {
            id: "balloon",
            remove: ["ring", "body", "necklace", "charm"],
            add: ["curio"]
        },
        {
            id: "apple",
            remove: ["ring", "necklace", "charm"],
            add: ["curio"]
        },
        {
            id: "vitamins",
            remove: ["ring", "necklace", "charm"],
            add: ["curio"]
        },
        {
            id: "shulker_heart",
            remove: ["ring"],
            add: []
        },
        {
            id: "bezoar",
            remove: ["ring", "necklace", "charm"],
            add: ["curio"]
        },
        {
            id: "lucky_horseshoe",
            remove: ["ring", "necklace", "charm"],
            add: ["feet"]
        },
        {
            id: "horseshoe_balloon",
            remove: ["ring", "necklace", "charm", "body"],
            add: ["feet"]
        },
        {
            id: "infinite_totem_of_undying",
            remove: ["belt", "necklace"],
            add: ["charm"]
        },
        {
            id: "obsidian_shield",
            remove: ["belt", "charm"],
            add: []
        },
        {
            id: "cobalt_shield",
            remove: ["charm"],
            add: []
        },
        {
            id: "ankh_shield",
            remove: ["charm"],
            add: []
        },
        {
            id: "tha_spider",
            remove: ["curio"],
            add: ["head"]
        },
        {
            id: "creepo",
            remove: ["curio"],
            add: ["head"]
        },
        {
            id: "tha_wizard",
            remove: ["curio"],
            add: ["head"]
        }
    ]
};

ServerEvents.tags("item", event =>
{
    bountifulbaubles_curios.items.forEach(item =>
    {
        if (item.remove.length > 0)
        {
            item.remove.forEach(c => event.remove(`${bountifulbaubles_curios.tag}:${c}`, `${bountifulbaubles_curios.namespace}:${item.id}`));
        }

        if (item.add.length > 0)
        {
            item.add.forEach(c => event.add(`${bountifulbaubles_curios.tag}:${c}`, `${bountifulbaubles_curios.namespace}:${item.id}`));
        }
    });
});
