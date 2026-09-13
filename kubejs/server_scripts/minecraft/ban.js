let minecraft_ban_items_server = [
	"minecraft:wooden_sword",
	"minecraft:wooden_shovel",
	"minecraft:wooden_pickaxe",
	"minecraft:wooden_axe",
	"minecraft:wooden_hoe",
	"minecraft:stone_sword",
	"minecraft:stone_shovel",
	"minecraft:stone_pickaxe",
	"minecraft:stone_axe",
	"minecraft:stone_hoe",
	"minecraft:iron_sword",
	"minecraft:iron_shovel",
	"minecraft:iron_pickaxe",
	"minecraft:iron_axe",
	"minecraft:iron_hoe",
	"minecraft:golden_sword",
	"minecraft:golden_shovel",
	"minecraft:golden_pickaxe",
	"minecraft:golden_axe",
	"minecraft:golden_hoe",
	"minecraft:diamond_sword",
	"minecraft:diamond_shovel",
	"minecraft:diamond_pickaxe",
	"minecraft:diamond_axe",
	"minecraft:diamond_hoe",
	"minecraft:netherite_sword",
	"minecraft:netherite_shovel",
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_axe",
	"minecraft:netherite_hoe",
	"minecraft:trident",
	"minecraft:shield",
	"minecraft:bow",
	"minecraft:crossbow",
];
let minecraft_ban_wearables_server = [
];
ServerEvents.recipes(event => event.remove({ output: minecraft_ban_items_server}));
ServerEvents.recipes(event => event.remove({ output: minecraft_ban_wearables_server}));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", minecraft_ban_items_server));
ServerEvents.tags("item", event => event.add("c:hidden_from_recipe_viewers", minecraft_ban_wearables_server));
