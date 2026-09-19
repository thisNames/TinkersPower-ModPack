ServerEvents.tags("item", event =>
{
    // 自己
    const _this = id => "railways:" + id;

    // 喝标签
    const drinks = "toughasnails:drinks";
    // 获得脱水 buff 概率
    const pc_drinks = new Set([25, 50, 75, 100]);

    // 补水量
    const thirst = n => `toughasnails:thirst/${Math.max(1, Math.min(20, n))}_thirst_drinks`;
    // 湿润度
    const hydration = n => `toughasnails:hydration/${Math.max(1, Math.min(10, n)) * 10}_hydration_drinks`;
    // 脏水
    const poison_chance = p => `toughasnails:poison_chance/${pc_drinks.has(p) ? p : 25}_poison_chance_drinks`;

    // 饮料
    // 8-2-75
    [
        _this("sandy"),
        _this("brown"),
        _this("maroon"),
        _this("red"),
        _this("vermilion"),
        _this("orange"),
        _this("granite"),
        _this("dripstone"),
        _this("yellow"),
        _this("chartreuse"),
        _this("olive_green"),
        _this("lime"),
        _this("green"),
        _this("pine_green"),
        _this("ochrum"),
        _this("cyan"),
        _this("sea_green"),
        _this("turquoise"),
        _this("light_blue"),
        _this("blue"),
        _this("royal_blue"),
        _this("purple"),
        _this("magenta"),
        _this("pink"),
        _this("white"),
        _this("diorite"),
        _this("limestone"),
        _this("light_gray"),
        _this("tuff"),
        _this("gray"),
        _this("scorchia"),
        _this("black")
    ].map(e => e + "_paint_pitcher").forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(8), item);
        event.add(hydration(2), item);
        event.add(poison_chance(75), item);
    });
});
