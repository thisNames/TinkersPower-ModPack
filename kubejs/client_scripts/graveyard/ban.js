let graveyard_ban_items = [
	"graveyard:bone_dagger",
];
let graveyard_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(graveyard_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(graveyard_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
