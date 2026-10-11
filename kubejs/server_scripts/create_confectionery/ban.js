let create_confectionery_ban_items_server = [
	"create_confectionery:candy_cane_sword",
	"create_confectionery:candy_cane_pickaxe",
	"create_confectionery:candy_cane_axe",
	"create_confectionery:candy_cane_shovel",
	"create_confectionery:candy_cane_hoe",
];
let create_confectionery_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: create_confectionery_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: create_confectionery_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", create_confectionery_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", create_confectionery_ban_wearables_server));
