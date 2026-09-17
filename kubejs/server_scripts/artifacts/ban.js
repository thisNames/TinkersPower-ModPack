let artifacts_ban_items_server = [
	"artifacts:onion_ring",
	"artifacts:eternal_steak",
	"artifacts:everlasting_beef",
];
let artifacts_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: artifacts_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: artifacts_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", artifacts_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", artifacts_ban_wearables_server));
