let endermanoverhaul_ban_items_server = [
	"endermanoverhaul:corrupted_shield",
	"endermanoverhaul:corrupted_blade",
];
let endermanoverhaul_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: endermanoverhaul_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: endermanoverhaul_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", endermanoverhaul_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", endermanoverhaul_ban_wearables_server));
