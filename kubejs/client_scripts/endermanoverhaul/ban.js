let endermanoverhaul_ban_items = [
	"endermanoverhaul:corrupted_shield",
	"endermanoverhaul:corrupted_blade",
];
let endermanoverhaul_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(endermanoverhaul_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(endermanoverhaul_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
