// priority: 2000

/**
 * 饰品被禁用标签
 * @type {string}
 */
const curios_wears_disbale = "acs:curios_wear_dis";

/**
 * 饰品集合
 * @type {Array<TDServerCuriosWear>}
 */
const curios_wears_list = [
    artifacts_curios_wears,
    bountifulbaubles_curios_wears,
    cataclysm_curios_wears,
    tinkers_ingenuity_curios_wears,
    xat_curios_wears
];


// 添加标签
ServerEvents.tags("item", event =>
{
    curios_wears_list.forEach(curios =>
    {
        curios.items.forEach(item =>
        {
            // 饰品物品 ID
            const item_id = nToiServer(curios.namespace, item.id);

            // 剔除标签
            item.remove.forEach(tag =>
            {
                const remove_tag = nToiServer(curios.tag, tag);

                event.remove(remove_tag, item_id);
            });

            // 添加标签
            item.add.forEach(tag =>
            {
                const add_tag = nToiServer(curios.tag, tag);

                event.add(add_tag, item_id);
            });

            // 标记禁用
            if (item.disable)
            {
                event.add(curios_wears_disbale, item_id);
            }
        });
    });
});
