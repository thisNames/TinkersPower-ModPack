// priority: 0

/**
 * @typedef TServerAccessorie 一个饰品类型
 * @property {string} id 饰品 ID
 * @property {number} level 饰品等级（1-3）
 * @property {boolean} dis 饰品是否可以被崩成幽冥粉
 */

/**
 * @file accessories_def.js
 * @typedef TServerAccessorieDef 饰品定义类型
 * @property {string} namespace 模组命名空间
 * @property {Array<TServerAccessorie>} curios 饰品集合
 */

/**
 * @description 饰品分类
 * @file accessories_def.js
 * @typedef {{namespace: string, curios: Array<{id: string, level: number, dis: boolean}>}} ServerAccessorieType
 */


/**
 * @description 材料分类
 * @file materials_def.js
 * @typedef {{namespace: string, material: Array<{id: string, level: number}>}} ServerMaterialType
 */


/**
 * @description 罪恶食物
 * @file sinful_foods_def.js
 * @typedef {{namespace: string, foods: Array<{id: string, second: number, amplifier: number}>}} ServerSinfulFoodType
 */


/**
 * @description 饰品穿戴
 * @file curios_wears_def.js
 * @typedef {{namespace: string, tag: string, items: Array<{id: string, remove: Array<string>, add: Array<string>, disable: boolean}>}} ServerCuriosWearType
 */


/**
 * @description 坚定意志：食物温度
 * @file toughasnails_foods_def.js
 * @typedef {{namespace: string, foods: Array<{id: string, isHot: boolean}>}} ServerToughasnailsFoodType
 */


/**
 * @description 坚定意志：盔甲温度
 * @file toughasnails_armors_def.js
 * @typedef {{namespace: string, armors: Array<{id: string, isHot: boolean}>}} ServerToughasnailsArmorType
 */


/**
 * @description 坚定意志：方块温度
 * @file toughasnails_blocks_def.js
 * @typedef {{namespace: string, blocks: Array<{id: string, isHot: boolean}>}} ServerToughasnailsBlockType
 */


/**
 * @description 坚定意志：手持温度
 * @file toughasnails_helds_def.js
 * @typedef {{namespace: string, helds: Array<{id: string, isHot: boolean}>}} ServerToughasnailsHeldType
 */


/**
 * @description 坚定意志：饮品
 * @file toughasnails_drinks_def.js
 * @typedef {{namespace: string, drinks: Array<{id: string, thirst: number, hydration: number, isDirty: boolean, dirtyChance: number}>}} ServerToughasnailsWaterType
 */
