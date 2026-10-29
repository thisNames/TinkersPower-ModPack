let lycanitesmobs_ban_items_server = [
	"lycanitesmobs:equipment",
	"lycanitesmobs:equipment_infuser",
	"lycanitesmobs:equipment_station",
	"lycanitesmobs:equipmentforge_lesser",
	"lycanitesmobs:equipmentforge_greater",
	"lycanitesmobs:equipmentforge_master",
];
let lycanitesmobs_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: lycanitesmobs_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: lycanitesmobs_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", lycanitesmobs_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", lycanitesmobs_ban_wearables_server));
