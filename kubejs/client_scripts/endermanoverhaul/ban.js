let endermanoverhaul_ban_items = [
	"endermanoverhaul:corrupted_shield",
	"endermanoverhaul:corrupted_blade",
];
let endermanoverhaul_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(endermanoverhaul_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(endermanoverhaul_ban_wearables, Text.red("此物品无法使用")));
