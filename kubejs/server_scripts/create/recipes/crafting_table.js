ServerEvents.recipes(event =>
{
    const _this = id => "create:" + id;
    const _mc = id => "minecraft:" + id;

    // 附魔瓶
    event.shapeless(_mc("experience_bottle"), [_mc("glass_bottle"), _this("experience_nugget")]);
});
