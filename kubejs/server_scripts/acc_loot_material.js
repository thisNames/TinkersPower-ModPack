const MATERIAL_TAG = "acs:m";
/**
 * 饰品材料
 * @type {Array<{namespace: string, material: Array<{id: string, level: number}>}>}
 */
const MATERIAL_OPTIONS = [
    {
        namespace: "iceandfire",
        material: [
            {
                id: "silver_ingot",
                level: 2
            },
            {
                id: "sapphire_gem",
                level: 2
            },
        ]
    },
    {
        namespace: "minecraft",
        material: [
            {
                id: "iron_ingot",
                level: 3
            },
            {
                id: "copper_ingot",
                level: 3
            },
            {
                id: "gold_ingot",
                level: 3
            },
            {
                id: "netherite_scrap",
                level: 2
            },
            {
                id: "netherite_ingot",
                level: 1
            },
            {
                id: "emerald",
                level: 3
            },
            {
                id: "lapis_lazuli",
                level: 3
            },
            {
                id: "diamond",
                level:3
            },
            {
                id: "blaze_powder",
                level: 2
            },
            {
                id: "nether_star",
                level: 1
            },
            {
                id: "ender_pearl",
                level: 3
            },
        ]
    },
    {
        namespace: "trinketsandbaubles",
        material: [
            {
                id: "glowing_powder",
                level: 1
            },
            {
                id: "glowing_ingot",
                level: 1
            },
            {
                id: "glowing_gem",
                level: 1
            },
            {
                id: "mana_candy",
                level: 2
            },
            {
                id: "mana_crystal",
                level: 1
            },
        ]
    },
    {
        namespace: "bountifulbaubles",
        material: [
            {
                id: "ender_dragon_scale",
                level: 1
            },
            {
                id: "amulet_sin_empty",
                level: 1
            },
            {
                id: "spectral_silt",
                level: 2
            },
            {
                id: "resplendent_token",
                level: 2
            },
            {
                id: "broken_black_dragon_scale",
                level: 1
            },
        ]
    }
];

ServerEvents.tags("item", event =>
{
    MATERIAL_OPTIONS.forEach(option =>
    {
        option.material.forEach(mate =>
        {
            const mate_id = option.namespace + ":" + mate.id;
            const mate_level = MATERIAL_TAG + mate.level;

            event.add(mate_level, mate_id);
        });
    });
});
