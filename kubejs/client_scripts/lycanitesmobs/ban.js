let lycanitesmobs_ban_items = [
	"lycanitesmobs:equipment",
	"lycanitesmobs:equipment_infuser",
	"lycanitesmobs:equipment_station",
	"lycanitesmobs:equipmentforge_lesser",
	"lycanitesmobs:equipmentforge_greater",
	"lycanitesmobs:equipmentforge_master",
];
let lycanitesmobs_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(lycanitesmobs_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(lycanitesmobs_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
