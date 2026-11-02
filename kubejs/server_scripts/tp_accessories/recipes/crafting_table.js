ServerEvents.recipes(event =>
{
    const _this = id => "tp_accessories:" + id;
    const _mc = id => "minecraft:" + id;
    const _tc = id => "tconstruct:" + id;
    const _tinket = id => "xat:" + id;
    const _pring = id => "potionrings2:" + id;

    // 魔力戒指
    event.shaped(_this("magic_ring"), [
        [_tinket("glowing_gem"), _mc("netherite_ingot"), _tc("amethyst_bronze_ingot")],
        [_mc("netherite_ingot"), Item.of(_pring("potion_ring"), "{Effect:\"minecraft:strength\"}").weakNBT(), _tc("amethyst_bronze_ingot")],
        [_tc("amethyst_bronze_ingot"), _tc("amethyst_bronze_ingot"), _tinket("mana_crystal")]
    ]);

    // 绿宝石指环
    event.shaped(_this("emerald_ring"), [
        ["", _mc("emerald"), ""],
        [_mc("gold_nugget"), "", _mc("gold_nugget")],
        ["", _mc("gold_nugget", "")]
    ]);

    // 绿宝石护符
    event.shaped(_this("emerald_amulet"), [
        [_mc("gold_nugget"), _mc("gold_nugget"), _mc("gold_nugget")],
        [_mc("gold_nugget"), "", _mc("gold_nugget")],
        ["", _mc("emerald"), ""]
    ]);
});
