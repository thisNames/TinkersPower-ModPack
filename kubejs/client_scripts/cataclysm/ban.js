let cataclysm_ban_items = [
	"cataclysm:black_steel_sword",
	"cataclysm:black_steel_axe",
	"cataclysm:black_steel_pickaxe",
	"cataclysm:black_steel_shovel",
	"cataclysm:black_steel_hoe",
	"cataclysm:black_steel_targe",
];
let cataclysm_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(cataclysm_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(cataclysm_ban_wearables, Text.red("此物品无法使用")));
