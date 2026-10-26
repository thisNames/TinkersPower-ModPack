// priority: 2000

/**
 * 饰品等级标签
 * @type {string}
 */
const accessories_level_tag = "acs:l";

/**
 * 饰品合成粉标签
 * @type {string}
 */
const accessories_dis_tag = "acs:dis";

/**
 * 饰品配置
 * @type {Array<ServerAccessorieType>}
 */
const accessories_list = [
    artifacts_accessories,
    bountifulbaubles_accessories,
    create_accessories,
    tp_accessories_accessories,
    tp_dragon_heart_accessories,
    xat_accessories
];

ServerEvents.tags("item", event =>
{
    accessories_list.forEach(accessorie =>
    {
        accessorie.curios.forEach(curio =>
        {
            const curio_id = accessorie.namespace + ":" + curio.id;
            const curio_level = accessories_level_tag + curio.level;

            event.add(curio_level, curio_id);

            if (curio.dis) event.add(accessories_dis_tag, curio_id);
        });
    });
});

ServerEvents.recipes(event =>
{
    event.remove({
        output: [
            "bountifulbaubles:spectral_silt"
        ]
    });

    event.shapeless("bountifulbaubles:spectral_silt", ["#" + accessories_dis_tag, "bountifulbaubles:disintegration_tablet"]);
});
