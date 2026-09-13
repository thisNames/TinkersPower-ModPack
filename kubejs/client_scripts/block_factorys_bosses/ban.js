let block_factorys_bosses_ban_items = [
	"block_factorys_bosses:pirate_saber",
	"block_factorys_bosses:dagger",
	"block_factorys_bosses:warrior_sword",
	"block_factorys_bosses:large_sword",
	"block_factorys_bosses:enhanced_shield",
];
let block_factorys_bosses_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(block_factorys_bosses_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(block_factorys_bosses_ban_wearables, Text.red("此物品无法使用")));
