// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();

    event.add([
        "tinkers_katanas:fuma_shuriken",
        "tinkers_katanas:katana"
    ], text);
});
