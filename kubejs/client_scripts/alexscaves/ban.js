let alexscaves_ban_items = [
	"alexscaves:limestone_spear",
	"alexscaves:raygun",
	"alexscaves:dreadbow",
	"alexscaves:nuclear_bomb",
	"alexscaves:tremorzilla_egg",
	"alexscaves:sugar_staff",
	"alexscaves:biome_treat",
];
let alexscaves_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(alexscaves_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(alexscaves_ban_wearables, Text.red("此物品无法使用")));
