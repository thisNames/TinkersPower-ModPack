const artifacts_curios = {
    namespace: "artifacts",
    tag: "artifacts",
    items: [
        {
            id: "pickaxe_heater",
            remove: "slot/hands",
            add: ""
        },
        {
            id: "onion_ring",
            remove: "slot/hands",
            add: ""
        }
    ]
};

ServerEvents.tags("item", event =>
{
    artifacts_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${artifacts_curios.tag}:${item.remove}`, `${artifacts_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${artifacts_curios.tag}:${item.add}`, `${artifacts_curios.namespace}:${item.id}`);
        }
    });
});
