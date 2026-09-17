ItemEvents.tooltip(event =>
{
    const text = Text.red("此饰品无法使用"); 

    event.add("artifacts:pickaxe_heater", text);
    event.add("artifacts:onion_ring", text);
});
