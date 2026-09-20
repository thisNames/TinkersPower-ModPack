/**
 * 温度系统：
 *      外在温度：方块、盔甲、手持物品
 *      内在温度：食物、饮料
 */
ServerEvents.tags("item", event =>
{
    // 自己
    const _this = id => "vinery:" + id;

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
    // 6-5
    [
        _this("red_grapejuice"),
        _this("white_grapejuice"),
        _this("red_taiga_grapejuice"),
        _this("white_taiga_grapejuice")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(6), item);
        event.add(hydration(5), item);
    });

    // 8-8
    [
        _this("apple_juice")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(8), item);
        event.add(hydration(8), item);
    });

    // 7-6
    [
        _this("red_jungle_grapejuice"),
        _this("white_jungle_grapejuice"),
        _this("red_savanna_grapejuice"),
        _this("white_savanna_grapejuice")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(7), item);
        event.add(hydration(6), item);
    });

    // 18-8
    [
        _this("jo_special_mixture"),
        _this("jellie_wine")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(18), item);
        event.add(hydration(8), item);
    });

    // 16-6
    [
        _this("aegis_wine"),
        _this("magnetic_wine"),
        _this("bolvar_wine"),
        _this("chorus_wine")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(16), item);
        event.add(hydration(6), item);
    });

    // 8-2
    [
        _this("mellohi_wine"),
        _this("solaris_wine"),
        _this("strad_wine"),
        _this("kelp_cider")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(8), item);
        event.add(hydration(2), item);
    });

    // 12-8
    [
        _this("stal_wine"),
        _this("chenet_wine"),
        _this("apple_wine"),
        _this("apple_cider"),
        _this("mead")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(12), item);
        event.add(hydration(8), item);
    });

    // 10-4
    [
        _this("glowing_wine"),
        _this("noir_wine"),
        _this("red_wine"),
        _this("cherry_wine"),
        _this("clark_wine"),
        _this("bottle_mojang_noir")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(10), item);
        event.add(hydration(4), item);
    });

    // 16-8
    [
        _this("lilitu_wine"),
        _this("villagers_fright"),
        _this("cristel_wine")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(16), item);
        event.add(hydration(8), item);
    });

    // 12-10
    [
        _this("eiswein")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(12), item);
        event.add(hydration(10), item);
        event.add(poison_chance(75), item);
    });

    // 16-10 100
    [
        _this("creepers_crush")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(16), item);
        event.add(hydration(10), item);
        event.add(poison_chance(100), item);
    });

    // 食物
    // 1-1
    [
        _this("cherry")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(1), item);
        event.add(hydration(1), item);
    });

    // 2-2
    [
        _this("red_grape"),
        _this("white_grape"),
        _this("savanna_grapes_red"),
        _this("savanna_grapes_white"),
        _this("taiga_grapes_red"),
        _this("taiga_grapes_white")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(2), item);
        event.add(hydration(2), item);
    });

    // 4-4
    [
        _this("jungle_grapes_white"),
        _this("jungle_grapes_red"),
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(4), item);
        event.add(hydration(4), item);
    });

    // 1-1-75
    [
        _this("rotten_cherry")
    ].forEach(item =>
    {
        event.add(drinks, item);
        event.add(thirst(1), item);
        event.add(hydration(1), item);
        event.add(poison_chance(75), item);
    });
});
