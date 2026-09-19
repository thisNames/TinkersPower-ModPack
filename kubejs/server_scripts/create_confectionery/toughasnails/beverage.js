ServerEvents.tags("item", event =>
{
    // 自己
    const _this = id => "create_confectionery:" + id;

    // 喝标签
    const drinks = "toughasnails:drinks";

    // 补水量
    const thirst = n => `toughasnails:thirst/${Math.max(1, Math.min(20, n))}_thirst_drinks`;
    // 湿润度
    const hydration = n => `toughasnails:hydration/${Math.max(1, Math.min(10, n)) * 10}_hydration_drinks`;

    // 饮料
    // 6-6
    [
        _this("hot_chocolate_bottle"),
        _this("soothing_hot_chocolate")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(6), item);
        event.add(hydration(6), item);
    });
});
