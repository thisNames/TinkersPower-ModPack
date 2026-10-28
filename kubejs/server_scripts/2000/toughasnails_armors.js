// priority: 2000

/**
 * 坚定意志：热盔甲标签
 * @type {string}
 */
const toughasnails_hot_armor_tag = "toughasnails:heating_armor";

/**
 * 坚定意志：冷盔甲标签
 * @type {string}
 */
const toughasnails_cool_armor_tag = "toughasnails:cooling_armor";

/**
 * 坚定意志：盔甲集合（外部温度）
 * @type {Array<ServerToughasnailsArmorType>}
 */
const toughasnails_armors_list = [

];

ServerEvents.tags("item", event =>
{
    toughasnails_armors_list.forEach(mod =>
    {
        mod.armors.forEach(armor =>
        {
            event.add(armor.isHot ? toughasnails_hot_armor_tag : toughasnails_cool_armor_tag, nToiServer(mod.namespace, armor.id));
        });
    });
});
