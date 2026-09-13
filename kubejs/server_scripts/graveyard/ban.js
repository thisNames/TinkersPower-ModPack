let graveyard_ban_items_server = [
	"graveyard:bone_dagger",
];
let graveyard_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: graveyard_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: graveyard_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", graveyard_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", graveyard_ban_wearables_server));
