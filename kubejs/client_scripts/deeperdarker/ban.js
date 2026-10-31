let deeperdarker_ban_items = [
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
let deeperdarker_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(deeperdarker_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(deeperdarker_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
