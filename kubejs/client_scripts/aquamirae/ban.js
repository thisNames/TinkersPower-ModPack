let aquamirae_ban_items = [
	"aquamirae:whisper_of_the_abyss",
	"aquamirae:divider",
	"aquamirae:terrible_sword",
	"aquamirae:fin_cutter",
	"aquamirae:remnants_saber",
	"aquamirae:poisoned_blade",
];
let aquamirae_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(aquamirae_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(aquamirae_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
