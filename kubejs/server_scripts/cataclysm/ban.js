let cataclysm_ban_items_server = [
	"cataclysm:black_steel_sword",
	"cataclysm:black_steel_axe",
	"cataclysm:black_steel_pickaxe",
	"cataclysm:black_steel_shovel",
	"cataclysm:black_steel_hoe",
	"cataclysm:black_steel_targe",
];
let cataclysm_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: cataclysm_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: cataclysm_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", cataclysm_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", cataclysm_ban_wearables_server));
