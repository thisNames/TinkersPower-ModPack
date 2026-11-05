let spore_ban_items_server = [
	"spore:saber",
	"spore:cleaver",
	"spore:armads",
	"spore:maul",
	"spore:combat_pickaxe",
	"spore:combat_shovel",
	"spore:infected_spear",
	"spore:mace",
	"spore:sickle",
	"spore:halberd",
	"spore:knife",
	"spore:boomerang",
];
let spore_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: spore_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: spore_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", spore_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", spore_ban_wearables_server));
