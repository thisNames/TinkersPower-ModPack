ItemEvents.tooltip(event =>
{
    const disassembling_tool = "tooldisassemble:disassembling_tool";

    event.add(disassembling_tool, Text.translatable("item.kubejs.tooltip.tooldisassemble.disassembling_tool").white());
    event.add(disassembling_tool, Text.translatable("item.kubejs.tooltip.tooldisassemble.disassembling_tool.1").white());
    event.add(disassembling_tool, Text.translatable("item.kubejs.tooltip.tooldisassemble.disassembling_tool.2").blue());
    event.add(disassembling_tool, Text.translatable("item.kubejs.tooltip.tooldisassemble.disassembling_tool.3").white());
});
