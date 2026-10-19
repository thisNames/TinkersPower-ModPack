ServerEvents.recipes(event =>
{
    const _this = id => "alexscaves:" + id;
    const _tingenuity = id => "tinkers_ingenuity:" + id;

    // 灭绝长矛
    event.replaceInput({ output: _this("extinction_spear") }, _this("limestone_spear"), _tingenuity("meteor_spear"));
});
