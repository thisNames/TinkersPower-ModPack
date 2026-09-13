let alexscaves_ban_items = [
	"alexscaves:limestone_spear",
];
let alexscaves_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(alexscaves_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(alexscaves_ban_wearables, Text.red("此物品无法使用")));
