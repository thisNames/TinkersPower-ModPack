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
ItemEvents.tooltip(event => event.add(aquamirae_ban_items, Text.red("此物品无法使用")));
ItemEvents.tooltip(event => event.add(aquamirae_ban_wearables, Text.red("此物品无法使用")));
