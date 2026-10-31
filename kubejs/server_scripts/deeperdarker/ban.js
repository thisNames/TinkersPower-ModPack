let deeperdarker_ban_items_server = [
	"deeperdarker:resonarium_shovel",
	"deeperdarker:resonarium_pickaxe",
	"deeperdarker:resonarium_axe",
	"deeperdarker:resonarium_hoe",
	"deeperdarker:resonarium_sword",
	"deeperdarker:warden_shovel",
	"deeperdarker:warden_pickaxe",
	"deeperdarker:warden_axe",
	"deeperdarker:warden_hoe",
	"deeperdarker:warden_sword",
];
let deeperdarker_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: deeperdarker_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: deeperdarker_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", deeperdarker_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", deeperdarker_ban_wearables_server));
