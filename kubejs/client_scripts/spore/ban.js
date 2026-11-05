let spore_ban_items = [
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
let spore_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(spore_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(spore_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
