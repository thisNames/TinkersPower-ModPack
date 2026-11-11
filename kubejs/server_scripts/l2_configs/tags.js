ServerEvents.tags("item", event =>
{
    [
        "minecraft:crafting_table",
        "minecraft:smithing_table",
        "minecraft:stonecutter",
        "minecraft:grindstone",
        "minecraft:cartography_table",
        "minecraft:loom",
        "modulargolems:golem_workbench"
    ].forEach(item =>
    {
        event.remove("l2screentracker:quick_access_vanilla", item);
        event.remove("l2screentracker:quick_access", item);
    });
});
