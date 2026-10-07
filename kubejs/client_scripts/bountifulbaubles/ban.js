let bountifulbaubles_ban_items = [
	"bountifulbaubles:treasure_bag",
];
let bountifulbaubles_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(bountifulbaubles_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(bountifulbaubles_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
