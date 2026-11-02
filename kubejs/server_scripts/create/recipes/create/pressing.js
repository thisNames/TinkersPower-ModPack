// 滚压
ServerEvents.recipes(event =>
{
    const _this = id => "create:" + id;
    const _mc = id => "minecraft:" + id;

    // 经验块
    createPressing(event, _mc("experience_bottle"), _this("experience_nugget"));
});
