// priority: 2000

/**
 * 饰品（战利品）等级标签
 * @type {string}
 */
const accessories_level_tag = "acs:l";

/**
 * 饰品配置
 * @type {Array<TDServerLootAccessorie>}
 */
const accessories_list = [
    artifacts_accessories,
    bountifulbaubles_accessories,
    create_accessories,
    tp_accessories_accessories,
    tp_dragon_heart_accessories,
    xat_accessories
];


// 添加标签
ServerEvents.tags("item", event =>
{
    accessories_list.forEach(accessorie =>
    {
        accessorie.curios.forEach(curio =>
        {
            const curio_id = nToiServer(accessorie.namespace, curio.id);
            const curio_level = accessories_level_tag + curio.level;

            event.add(curio_level, curio_id);
        });
    });
});
