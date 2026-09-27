ItemEvents.tooltip(event =>
{
    const disassembling_tool = "tooldisassemble:disassembling_tool";

    event.add(disassembling_tool, Text.white("主手持工具拆解器"));
    event.add(disassembling_tool, Text.white("将要拆解的工具放入快捷栏任意格（左边靠前）"));
    event.add(disassembling_tool, Text.blue("对【赤钕、青钕】方块右击"));
    event.add(disassembling_tool, Text.white("即可自动拆解快捷栏第一个可拆工具"));
});
