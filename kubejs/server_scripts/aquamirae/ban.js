let aquamirae_ban_items_server = [
	"aquamirae:whisper_of_the_abyss",
	"aquamirae:divider",
	"aquamirae:terrible_sword",
	"aquamirae:fin_cutter",
	"aquamirae:remnants_saber",
	"aquamirae:poisoned_blade",
];
let aquamirae_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: aquamirae_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: aquamirae_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", aquamirae_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", aquamirae_ban_wearables_server));
