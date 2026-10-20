ServerEvents.recipes(event =>
{
    const _this = id => "levelup2:" + id;
    const _mc = id => "minecraft:" + id;
    const _tcons = id => "tconstruct:" + id;

    // 专精书
    event.shapeless(_this("skillbook"), [_mc("lapis_lazuli"), _mc("book")]);
    
    // 专精变革书
    event.shaped(_this("respecbook"), [
        [_mc("netherite_scrap"), _tcons("encyclopedia"), ""],
        [_mc("wooden_pickaxe"), _mc("coal"), ""],
        ["", "", ""]
    ]);
});
