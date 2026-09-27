ServerEvents.recipes(event =>
{
    const _this = id => "tooldisassemble:" + id;
    const _quark = id => "quark:" + id;
    const _mc = id => "minecraft:" + id;
    const _ac = id => "alexscaves:" + id;

    event.remove({
        output: [
            _this("disassembling_tool")
        ]
    });

    event.shaped(_this("disassembling_tool"), [
        [_ac("scarlet_neodymium_ingot"), "", _ac("azure_neodymium_ingot")],
        [_ac("scarlet_neodymium_ingot"), _quark("diamond_heart"), _ac("azure_neodymium_ingot")],
        ["", _mc("blaze_rod"), ""]
    ]);
});
