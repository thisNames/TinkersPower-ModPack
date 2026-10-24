// priority: 2000

/**
 * 材料等级标签
 * @type {string}
 */
const material_level_tag = "acs:m";

/**
 * 饰品材料
 * 材料无法被效果配置：config/itemphysic.json => undestroyableItems
 * @type {Array<ServerMaterialType>}
 */
const material_list = [
    bountifulbaubles_materials,
    iceandfire_materials,
    minecraft_materials,
    obscure_api_materials,
    roughtweaks_materials,
    tconstruct_materials,
    tp_armorunder_materials,
    xat_materials
];

ServerEvents.tags("item", event =>
{
    material_list.forEach(material =>
    {
        material.material.forEach(mate =>
        {
            const mate_id = option.namespace + ":" + mate.id;
            const mate_level = material_level_tag + mate.level;

            event.add(mate_level, mate_id);
        });
    });
});
