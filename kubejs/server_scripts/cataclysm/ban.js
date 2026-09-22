let cataclysm_ban_items_server = [
	"cataclysm:black_steel_sword",
	"cataclysm:black_steel_axe",
	"cataclysm:black_steel_pickaxe",
	"cataclysm:black_steel_shovel",
	"cataclysm:black_steel_hoe",
	"cataclysm:black_steel_targe",
	"cataclysm:the_immolator",
	"cataclysm:the_annihilator",
	"cataclysm:soul_render",
	"cataclysm:wrath_of_the_desert",
	"cataclysm:cursed_bow",
	"cataclysm:the_incinerator",
	"cataclysm:gauntlet_of_maelstrom",
	"cataclysm:gauntlet_of_bulwark",
	"cataclysm:bulwark_of_the_flame",
	"cataclysm:meat_shredder",
	"cataclysm:laser_gatling",
	"cataclysm:wither_assault_shoulder_weapon",
	"cataclysm:void_assault_shoulder_weapon",
	"cataclysm:infernal_forge",
	"cataclysm:void_forge",
];
let cataclysm_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: cataclysm_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: cataclysm_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", cataclysm_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", cataclysm_ban_wearables_server));
