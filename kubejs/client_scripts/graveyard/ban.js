let graveyard_ban_items = [
	"graveyard:bone_dagger",
];
let graveyard_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(graveyard_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(graveyard_ban_wearables, Text.red("此物品无法使用")));
