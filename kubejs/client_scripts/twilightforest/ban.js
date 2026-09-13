let twilightforest_ban_items_1789293812750 = [
	"twilightforest:ironwood_sword",
	"twilightforest:ironwood_axe",
	"twilightforest:ironwood_pickaxe",
	"twilightforest:ironwood_shovel",
	"twilightforest:ironwood_hoe",
	"twilightforest:steeleaf_sword",
	"twilightforest:steeleaf_axe",
	"twilightforest:steeleaf_pickaxe",
	"twilightforest:steeleaf_shovel",
	"twilightforest:steeleaf_hoe",
	"twilightforest:fiery_sword",
	"twilightforest:fiery_pickaxe",
	"twilightforest:gold_minotaur_axe",
	"twilightforest:knightmetal_sword",
	"twilightforest:knightmetal_axe",
	"twilightforest:knightmetal_pickaxe",
	"twilightforest:uncrafting_table",
];
let twilightforest_ban_wearables_1789293812750 = [
];
ItemEvents.tooltip(event => event.add(twilightforest_ban_items_1789293812750, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(twilightforest_ban_wearables_1789293812750, Text.red("此物品无法使用")));
