ServerEvents.recipes(event =>
{
    const _this = id => "minecraft:" + id;

    event.recipes.kubejs.shapeless(_this("string"), [_this("white_wool")]).modifyResult((inputs, output) =>
    {
        output.setCount(4);

        return output;
    });
});
