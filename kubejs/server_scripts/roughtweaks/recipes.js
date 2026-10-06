ServerEvents.recipes(event =>
{
    const _this = id => "roughtweaks:" + id;
    const _mc = id => "minecraft:" + id;

    event.replaceInput({ output: _this("medkit_enchanted") }, _mc("golden_apple"), _mc("enchanted_golden_apple"));
});
