let dreadsteel_ban_items = [
	"dreadsteel:dreadsteel_scythe",
];
let dreadsteel_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(dreadsteel_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(dreadsteel_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
