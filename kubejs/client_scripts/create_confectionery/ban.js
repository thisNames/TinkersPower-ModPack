let create_confectionery_ban_items = [
	"create_confectionery:candy_cane_sword",
	"create_confectionery:candy_cane_pickaxe",
	"create_confectionery:candy_cane_axe",
	"create_confectionery:candy_cane_shovel",
	"create_confectionery:candy_cane_hoe",
];
let create_confectionery_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(create_confectionery_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(create_confectionery_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
