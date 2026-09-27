ServerEvents.recipes(event =>
{
    const _this = id => "minecraft:" + id;;
    const _tog = id => "toughasnails:" + id;

    event.recipes.minecraft.smelting(_tog("purified_water_bottle"), Item.of(_this("potion"), "{Potion:\"minecraft:water\"}").weakNBT(), 0);
});
