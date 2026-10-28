// priority: 0

/**
 * @typedef TServerLootAccessorie 一个饰品类型（战利品）
 * @property {string} id 饰品 ID
 * @property {number} level 饰品等级（1-3）
 * @property {boolean} dis 饰品是否可以被崩成幽冥粉
 */

/**
 * @typedef TServerLootMaterial 一个材料类型（战利品）
 * @property {string} id 材料 ID
 * @property {number} level 材料等级（1-3）
 */

/**
 * @typedef TServerSinfulFood 一个罪恶食物类型
 * @property {string} id 罪恶食物 ID
 * @property {number} second 持续时间（单位/秒）
 * @property {number} amplifier 效果等级
 */

/**
 * @typedef TServerCuriosWear 一个穿戴饰品类型
 * @property {string} id 饰品 ID
 * @property {Array<string>} remove 移除的标签集合
 * @property {Array<string>} add 添加的标签集合
 * @property {boolean} disable 此饰品是否被禁用（起到提示作用）
 */

/**
 * @typedef TServerToughasnailsTemperature 坚定意志：温度类型
 * @property {string} id 物品 ID
 * @property {boolean} isHot 是否是热源类型
 */

/**
 * @typedef TServerToughasnailsDrink 坚定意志：饮品类型
 * @property {string} id 物品 ID
 * @property {number} thirst 补水量（1-20）
 * @property {number} hydration 湿润度（1-10）
 * @property {boolean} isDirty 是否是脏水
 * @property {number} dirtyChance 如果是脏水，则获得口渴概率（1-4）
 */

// ========================= file def ==============================

/**
 * @file loot_accessories_def.js
 * @typedef TDServerLootAccessorie 饰品分类（战利品）
 * @property {string} namespace 模组命名空间
 * @property {Array<TServerLootAccessorie>} curios 饰品集合
 */

/**
 * @file loot_materials_def.js
 * @typedef TDServerLootMaterial 材料分类（战利品）
 * @property {string} namespace 模组命名空间
 * @property {Array<TServerLootMaterial>} material 材料集合
 */

/**
 * @file sinful_foods_def.js
 * @typedef TDServerSinfulFood 罪恶食物分类
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerSinfulFood>} foods 罪恶食物集合
 */

/**
 * @file curios_wears_def.js
 * @typedef TDServerCuriosWear 饰品穿戴
 * @property {string} namespace 模组名命空间
 * @property {string} tag 饰品的头标签（一般为 curios）
 * @property {Array<TServerCuriosWear>} items 饰品物品集合
 */

/**
 * @file toughasnails_foods_def.js
 * @typedef TDServerToughasnailsFood 坚定意志：食物
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerToughasnailsTemperature>} foods 食物集合
 */

/**
 * @file toughasnails_armors_def.js
 * @typedef TDServerToughasnailsArmor 坚定意志：盔甲
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerToughasnailsTemperature>} armors 盔甲集合
 */

/**
 * @file toughasnails_blocks_def.js
 * @typedef TDServerToughasnailsBlock 坚定意志：方块
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerToughasnailsTemperature>} blocks 方块集合
 */

/**
 * @file toughasnails_helds_def.js
 * @typedef TDServerToughasnailsHeld 坚定意志：手持
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerToughasnailsTemperature>} helds 手持物品集合
 */

/**
 * @file toughasnails_drinks_def.js
 * @typedef TDServerToughasnailsDrink 坚定意志：饮品
 * @property {string} namespace 模组名命空间
 * @property {Array<TServerToughasnailsDrink>} drinks 饮品集合
 */
