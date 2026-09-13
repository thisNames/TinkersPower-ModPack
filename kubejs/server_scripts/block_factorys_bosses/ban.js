let block_factorys_bosses_ban_items_server = [
	"block_factorys_bosses:pirate_saber",
	"block_factorys_bosses:dagger",
	"block_factorys_bosses:warrior_sword",
	"block_factorys_bosses:large_sword",
	"block_factorys_bosses:enhanced_shield",
];
let block_factorys_bosses_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: block_factorys_bosses_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: block_factorys_bosses_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", block_factorys_bosses_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", block_factorys_bosses_ban_wearables_server));
