// priority: 2000

/**
 * 材料等级标签
 * @type {string}
 */
const material_level_tag = "acs:m";

/**
 * 饰品材料
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
    xat_materials,
    create_materials,
    waystones_materials,
    vinery_materials,
    tp_toughasnails_materials
];

ServerEvents.tags("item", event =>
{
    material_list.forEach(mater =>
    {
        mater.material.forEach(item =>
        {
            const item_id = mater.namespace + ":" + item.id;
            const item_level = material_level_tag + item.level;

            event.add(item_level, item_id);
        });
    });
});
