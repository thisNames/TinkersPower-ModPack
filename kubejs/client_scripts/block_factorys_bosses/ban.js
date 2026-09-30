let block_factorys_bosses_ban_items = [
	"block_factorys_bosses:pirate_saber",
	"block_factorys_bosses:dagger",
	"block_factorys_bosses:warrior_sword",
	"block_factorys_bosses:large_sword",
	"block_factorys_bosses:enhanced_shield",
	"block_factorys_bosses:knight_sword",
	"block_factorys_bosses:kraken_trident",
	"block_factorys_bosses:ice_gauntlet",
	"block_factorys_bosses:undying_tentacle",
	"block_factorys_bosses:sandworm_gauntlet",
	"block_factorys_bosses:dragon_guard_shield",
];
let block_factorys_bosses_ban_wearables = [
];
ItemEvents.tooltip(event => event.add(block_factorys_bosses_ban_items, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.items").red()));
ItemEvents.tooltip(event => event.add(block_factorys_bosses_ban_wearables, Text.translatable("item.kubejs.tooltip.itemprohibiteditems.wearables").red()));
