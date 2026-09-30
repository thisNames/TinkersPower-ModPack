// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();
    
    event.add([
        "tcompat:glaive"
    ], text);
});
