ServerEvents.recipes(event =>
{
    const _this = id => "levelup2:" + id;
    const _mc = id => "minecraft:" + id;
    const _tcons = id => "tconstruct:" + id;

    event.shapeless(_this("skillbook"), [_mc("lapis_lazuli"), _mc("book")]);
    
    event.shaped(_this("respecbook"), [
        [_mc("netherite_scrap"), _tcons("encyclopedia"), ""],
        [_mc("wooden_pickaxe"), _mc("coal"), ""],
        ["", "", ""]
    ]);
});
