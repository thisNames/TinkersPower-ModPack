// priority: 2000

/**
 * 坚定意志：热手持标签 held
 * @type {string}
 */
const toughasnails_hot_held_tag = "toughasnails:heating_held_items";

/**
 * 坚定意志：冷手持标签 held
 * @type {string}
 */
const toughasnails_cool_held_tag = "toughasnails:cooling_held_items";

/**
 * 坚定意志：热手持标签 fuel
 * @type {string}
 */
const toughasnails_hot_fuel_tag = "toughasnails:thermoregulator_heating_fuel";

/**
 * 坚定意志：冷手持标签 fuel
 * @type {string}
 */
const toughasnails_cool_fuel_tag = "toughasnails:thermoregulator_cooling_fuel";

/**
 * 坚定意志：手持集合
 * @type {Array<TDServerToughasnailsHeld>}
 */
const toughasnails_held_list = [
    alexscaves_toughasnails_helds,
    aquamirae_toughasnails_helds,
    cataclysm_toughasnails_helds,
    create_toughasnails_helds,
    iceandfire_toughasnails_helds,
    lycanitesmobs_toughasnails_helds,
    minecraft_toughasnails_helds,
    tconstruct_toughasnails_helds,
    tide_toughasnails_helds,
    tp_armorunder_toughasnails_helds,
    twilightforest_toughasnails_helds,
    deeperdarker_toughasnails_helds
];


// 添加标签
ServerEvents.tags("item", event =>
{
    toughasnails_held_list.forEach(mod =>
    {
        mod.helds.forEach(held =>
        {
            const id = nToiServer(mod.namespace, held.id);
            
            event.add(held.isHot ? toughasnails_hot_held_tag : toughasnails_cool_held_tag, id);
            event.add(held.isHot ? toughasnails_hot_fuel_tag : toughasnails_cool_fuel_tag, id);
        });
    });
});
