let twilightforest_ban_items_server = [
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
let twilightforest_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: twilightforest_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: twilightforest_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", twilightforest_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", twilightforest_ban_wearables_server));
