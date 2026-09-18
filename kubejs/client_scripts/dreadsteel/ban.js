let dreadsteel_ban_items = [
	"dreadsteel:dreadsteel_scythe",
];
let dreadsteel_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(dreadsteel_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(dreadsteel_ban_wearables, Text.red("此物品无法使用")));
