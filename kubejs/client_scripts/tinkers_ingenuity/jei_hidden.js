// 工具
ItemEvents.tooltip(event =>
{
    const text = Text.translatable("item.kubejs.tooltip.tconstruct.jei_hiddens").blue();

    event.add([
        "tinkers_ingenuity:meteor_spear",
        "tinkers_ingenuity:blowpipe",
        "tinkers_ingenuity:tinkers_medal"
    ], text);
});
