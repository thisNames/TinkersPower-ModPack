const CURIOS_LEVEL_TAG = "acs:l";
const CURIOS_DIS_TAG = "acs:dis";
/**
 * 饰品配置
 * @type {Array<{namespace: string, curios: Array<{id: string, level: number, dis: boolean}>}>}
 */
const CURIOS_OPTIONS = [
    {
        namespace: "trinketsandbaubles",
        curios: [
            {
                id: "weightless_stone",
                level: 2,
                dis: true
            },
            {
                id: "inertia_null_stone",
                level: 2,
                dis: true
            },
            {
                id: "greater_inertia_stone",
                level: 2,
                dis: true
            },
            {
                id: "faelis_claw",
                level: 2,
                dis: false
            },
            {
                id: "glow_ring",
                level: 3,
                dis: false
            },
            {
                id: "sea_stone",
                level: 1,
                dis: false
            },
            {
                id: "poison_stone",
                level: 1,
                dis: true
            },
            {
                id: "wither_ring",
                level: 2,
                dis: false
            },
            {
                id: "damage_shield",
                level: 1,
                dis: false
            },
            {
                id: "teddy_bear",
                level: 3,
                dis: false
            },
            {
                id: "dragons_eye_fire",
                level: 1,
                dis: false
            },
            {
                id: "dragons_eye_ice",
                level: 1,
                dis: false
            },
            {
                id: "dragons_eye_lightning",
                level: 1,
                dis: false
            },
            {
                id: "polarized_stone",
                level: 3,
                dis: false
            },
            {
                id: "ender_tiara",
                level: 2,
                dis: true
            },
            {
                id: "arcing_orb",
                level: 1,
                dis: false
            },
            {
                id: "dragons_ring",
                level: 1,
                dis: false
            },
            {
                id: "dwarves_ring",
                level: 1,
                dis: false
            },
            {
                id: "elves_ring",
                level: 1,
                dis: false
            },
            {
                id: "faelis_ring",
                level: 1,
                dis: false
            },
            {
                id: "fairies_ring",
                level: 1,
                dis: false
            },
            {
                id: "goblins_ring",
                level: 1,
                dis: false
            },
            {
                id: "titan_ring",
                level: 1,
                dis: false
            }
        ]
    },
    {
        namespace: "bountifulbaubles",
        curios: [
            {
                id: "broken_heart",
                level: 2,
                dis: true
            },
            {
                id: "magic_mirror",
                level: 2,
                dis: true
            },
            {
                id: "wormhole_mirror",
                level: 2,
                dis: true
            },
            {
                id: "balloon",
                level: 3,
                dis: true
            },
            {
                id: "obsidian_skull",
                level: 2,
                dis: true
            },
            {
                id: "sunglasses",
                level: 3,
                dis: true
            },
            {
                id: "apple",
                level: 3,
                dis: true
            },
            {
                id: "vitamins",
                level: 2,
                dis: true
            },
            {
                id: "ring_overclocking",
                level: 3,
                dis: true
            },
            {
                id: "shulker_heart",
                level: 3,
                dis: true
            },
            {
                id: "ring_free_action",
                level: 2,
                dis: true
            },
            {
                id: "bezoar",
                level: 3,
                dis: true
            },
            {
                id: "black_dragon_scale",
                level: 2,
                dis: true
            },
            {
                id: "mixed_dragon_scale",
                level: 2,
                dis: true
            },
            {
                id: "lucky_horseshoe",
                level: 2,
                dis: true
            },
            {
                id: "ankh_charm",
                level: 1,
                dis: false
            },
            {
                id: "horseshoe_balloon",
                level: 1,
                dis: false
            },
            {
                id: "cross_necklace",
                level: 3,
                dis: true
            },
            {
                id: "phylactery_charm",
                level: 2,
                dis: false
            },
            {
                id: "pride_pendant",
                level: 2,
                dis: true
            },
            {
                id: "wrath_pendant",
                level: 2,
                dis: true
            },
            {
                id: "gluttony_pendant",
                level: 2,
                dis: true
            },
            {
                id: "broken_black_dragon_scale",
                level: 3,
                dis: true
            },
            {
                id: "endless_pearl",
                level: 2,
                dis: true
            },
            {
                id: "vampiric_glove",
                level: 2,
                dis: true
            },
            {
                id: "gauntlets_dexterity",
                level: 2,
                dis: true
            },
            {
                id: "infinite_totem_of_undying",
                level: 2,
                dis: true
            },
            {
                id: "cobalt_shield",
                level: 3,
                dis: false
            },
            {
                id: "obsidian_shield",
                level: 2,
                dis: false
            },
            {
                id: "ankh_shield",
                level: 1,
                dis: false
            },
            {
                id: "tha_spider",
                level: 3,
                dis: true
            },
            {
                id: "creepo",
                level: 3,
                dis: true
            },
            {
                id: "tha_wizard",
                level: 3,
                dis: true
            },
            {
                id: "rock_candy",
                level: 3,
                dis: true
            },
            {
                id: "ember",
                level: 2,
                dis: true
            },
        ]
    },
    {
        namespace: "artifacts",
        curios: [
            {
                id: "umbrella",
                level: 3,
                dis: false
            },
            {
                id: "plastic_drinking_hat",
                level: 3,
                dis: true
            },
            {
                id: "novelty_drinking_hat",
                level: 3,
                dis: true
            },
            {
                id: "snorkel",
                level: 3,
                dis: true
            },
            {
                id: "night_vision_goggles",
                level: 3,
                dis: true
            },
            {
                id: "villager_hat",
                level: 3,
                dis: true
            },
            {
                id: "superstitious_hat",
                level: 3,
                dis: true
            },
            {
                id: "cowboy_hat",
                level: 3,
                dis: true
            },
            {
                id: "lucky_scarf",
                level: 3,
                dis: true
            },
            {
                id: "scarf_of_invisibility",
                level: 3,
                dis: true
            },
            {
                id: "cross_necklace",
                level: 3,
                dis: true
            },
            {
                id: "panic_necklace",
                level: 3,
                dis: true
            },
            {
                id: "shock_pendant",
                level: 3,
                dis: true
            },
            {
                id: "flame_pendant",
                level: 3,
                dis: true
            },
            {
                id: "thorn_pendant",
                level: 3,
                dis: true
            },
            {
                id: "charm_of_sinking",
                level: 3,
                dis: true
            },
            {
                id: "cloud_in_a_bottle",
                level: 3,
                dis: true
            },
            {
                id: "obsidian_skull",
                level: 3,
                dis: true
            },
            {
                id: "antidote_vessel",
                level: 3,
                dis: true
            },
            {
                id: "universal_attractor",
                level: 3,
                dis: true
            },
            {
                id: "crystal_heart",
                level: 2,
                dis: true
            },
            {
                id: "helium_flamingo",
                level: 3,
                dis: true
            },
            {
                id: "chorus_totem",
                level: 3,
                dis: true
            },
            {
                id: "digging_claws",
                level: 3,
                dis: true
            },
            {
                id: "feral_claws",
                level: 3,
                dis: true
            },
            {
                id: "power_glove",
                level: 3,
                dis: true
            },
            {
                id: "fire_gauntlet",
                level: 2,
                dis: true
            },
            {
                id: "pocket_piston",
                level: 3,
                dis: true
            },
            {
                id: "vampiric_glove",
                level: 2,
                dis: true
            },
            {
                id: "golden_hook",
                level: 3,
                dis: true
            },
            {
                id: "aqua_dashers",
                level: 3,
                dis: true
            },
            {
                id: "bunny_hoppers",
                level: 3,
                dis: true
            },
            {
                id: "kitty_slippers",
                level: 3,
                dis: true
            },
            {
                id: "running_shoes",
                level: 3,
                dis: true
            },
            {
                id: "snowshoes",
                level: 3,
                dis: true
            },
            {
                id: "steadfast_spikes",
                level: 2,
                dis: true
            },
            {
                id: "flippers",
                level: 3,
                dis: true
            },
            {
                id: "rooted_boots",
                level: 2,
                dis: true
            },
            {
                id: "whoopee_cushion",
                level: 3,
                dis: true
            },
            {
                id: "anglers_hat",
                level: 3,
                dis: true
            },
        ]
    },
    {
        namespace: "create",
        curios: [
            {
                id: "goggles",
                level: 3,
                dis: false
            },
        ]
    }
];

ServerEvents.tags("item", event =>
{
    CURIOS_OPTIONS.forEach(option =>
    {
        option.curios.forEach(curio =>
        {
            const curio_id = option.namespace + ":" + curio.id;
            const curio_level = CURIOS_LEVEL_TAG + curio.level;

            event.add(curio_level, curio_id);

            if (curio.dis)
            {
                event.add(CURIOS_DIS_TAG, curio_id);
            }
        });

        // console.log(option.namespace + ": " + option.curios.length);
    });
});

ServerEvents.recipes(event =>
{
    event.remove({
        output: [
            "bountifulbaubles:spectral_silt"
        ]
    });

    event.shapeless("bountifulbaubles:spectral_silt", ["#" + CURIOS_DIS_TAG, "bountifulbaubles:disintegration_tablet"])
});
