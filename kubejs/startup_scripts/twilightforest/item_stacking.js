ItemEvents.modification(event =>
{
    [
        // 虫子
        "twilightforest:moonworm",
        "twilightforest:firefly",
        "twilightforest:cicada",
        // 护符
        "twilightforest:charm_of_life_1",
        "twilightforest:charm_of_life_2",
        "twilightforest:charm_of_keeping_1",
        "twilightforest:charm_of_keeping_2",
        "twilightforest:charm_of_keeping_3"
    ].forEach(item =>
    {
        event.modify(item, c =>
        {
            c.maxStackSize = 1;
        });
    });
});
