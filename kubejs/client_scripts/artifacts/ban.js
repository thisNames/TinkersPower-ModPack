let artifacts_ban_items = [
	"artifacts:onion_ring",
	"artifacts:eternal_steak",
	"artifacts:everlasting_beef",
];
let artifacts_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(artifacts_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(artifacts_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
