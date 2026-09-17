let artifacts_ban_items = [
	"artifacts:onion_ring",
	"artifacts:eternal_steak",
	"artifacts:everlasting_beef",
];
let artifacts_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(artifacts_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(artifacts_ban_wearables, Text.red("此物品无法使用")));
