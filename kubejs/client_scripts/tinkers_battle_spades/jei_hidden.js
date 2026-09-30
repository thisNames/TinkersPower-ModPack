// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();
    
    event.add([
        "tinkers_battle_spades:battle_spade"
    ], text);
});
