let alexscaves_ban_items_server = [
	"alexscaves:limestone_spear",
];
let alexscaves_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: alexscaves_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: alexscaves_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", alexscaves_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", alexscaves_ban_wearables_server));
