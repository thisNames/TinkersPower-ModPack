let dreadsteel_ban_items_server = [
	"dreadsteel:dreadsteel_scythe",
];
let dreadsteel_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: dreadsteel_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: dreadsteel_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", dreadsteel_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", dreadsteel_ban_wearables_server));
