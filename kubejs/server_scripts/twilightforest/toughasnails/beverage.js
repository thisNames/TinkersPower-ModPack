ServerEvents.tags("item", event => {
    // 自己
    const _this = id => "twilightforest:" + id;

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

    // 饮品
    // 2-1-25
    [
        _this("gelatinous_maze_slime_drop"),
        _this("gelatinous_slime_drop")
    ].forEach(item => {
        event.add(drinks, item);
        event.add(thirst(2), item);
        event.add(hydration(1), item);
        event.add(poison_chance(25), item);
    });

    // 6-4
    [
        _this("moss_soup")
    ].forEach(item => {
        event.add(drinks, item);
        event.add(thirst(6), item);
        event.add(hydration(4), item);
    });

    // 2-2
    [
        _this("berry_medley")
    ].forEach(item => {
        event.add(drinks, item);
        event.add(thirst(6), item);
        event.add(hydration(4), item);
    });

    // 1-1
    [
        _this("maloberry"),
        _this("blueberry"),
        _this("raspberry"),
        _this("blackberry"),
        _this("duskberry"),
        _this("skyberry"),
        _this("blightberry"),
        _this("stingberry")
    ].forEach(item => {
        event.add(drinks, item);
        event.add(thirst(1), item);
        event.add(hydration(1), item);
    });
});
