/**
 * 物理物品：浮在水面上、会被火烧掉的、不毁的（雷击）
 */

const FS = require("node:fs");
const PT = require("node:path");

const { Logger } = require("./library/logger");
const { ItemPhysicEntrie, ItemPhysicConfig } = require("./library/itemphysic");

// 日志
const logger = new Logger("itemphysic_general", PT.basename(__filename));

// 模板路径
const ITEM_PHYISC_ROOT = "config_template/itemphysic/general";
// 模组配置路径
const ITEM_PHYISC_CONFIG = "config/itemphysic.json";
// 浮在水面上文件名称
const SWIMMING_ITEMS = "swimming_items.json";
// 会被火烧掉的文件名称
const BURNING_ITEMS = "burning_items.json";
// 不毁的文件名称
const UNDESTORYABLE_ITEM = "undestroyable_items.json";

// 创建配置对象
const config = new ItemPhysicConfig(JSON.parse(FS.readFileSync(ITEM_PHYISC_CONFIG, { encoding: "utf-8" })));

// 读取所有模组
const listDirent = FS.readdirSync(ITEM_PHYISC_ROOT, { encoding: "utf-8", withFileTypes: true });

// 遍历
for (let i = 0; i < listDirent.length; i++)
{
    const namespace = listDirent[i];

    // 不是目录
    if (!namespace.isDirectory()) return;

    // 文件
    const burningItemFile = PT.join(ITEM_PHYISC_ROOT, namespace.name, BURNING_ITEMS);
    const swimmingItemFile = PT.join(ITEM_PHYISC_ROOT, namespace.name, SWIMMING_ITEMS);
    const undestroyableItemFile = PT.join(ITEM_PHYISC_ROOT, namespace.name, UNDESTORYABLE_ITEM);

    // 解析
    const burningItems = JSON.parse(FS.readFileSync(burningItemFile, { encoding: "utf-8" }));
    const swimmingItems = JSON.parse(FS.readFileSync(swimmingItemFile, { encoding: "utf-8" }));
    const undestroyableItems = JSON.parse(FS.readFileSync(undestroyableItemFile, { encoding: "utf-8" }));

    // 保存
    burningItems.forEach(e => config.putBurningItem(new ItemPhysicEntrie("item", namespace.name + ":" + e).get()));
    swimmingItems.forEach(e => config.putSwimmingItem(new ItemPhysicEntrie("item", namespace.name + ":" + e).get()));
    undestroyableItems.forEach(e => config.putUndestroyableItem(new ItemPhysicEntrie("item", namespace.name + ":" + e).get()));

    // 显示
    logger.info(namespace.name + " => " + burningItemFile);
    logger.info(namespace.name + " => " + swimmingItemFile);
    logger.info(namespace.name + " => " + undestroyableItemFile);
}

// 去重
config.general.burningItems.set();
config.general.swimmingItems.set();
config.general.undestroyableItems.set();

// 刷新配置
FS.writeFileSync(ITEM_PHYISC_CONFIG, config.get(), { encoding: "utf-8" });

// 物品数量
const itemTotal = config.getBurningSize() + config.getSwimmingSize() + config.getUndestroyableSize();
// 模组数量
const mods = listDirent.filter(i => i.isDirectory()).length;

// 统计显示
logger.info("in mods: " + mods);
logger.info("new item total: " + itemTotal);
logger.close();
