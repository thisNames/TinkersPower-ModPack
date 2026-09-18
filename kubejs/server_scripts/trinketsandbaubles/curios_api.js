const trinketsandbaubles_curios = {
    namespace: "trinketsandbaubles",
    tag: "curios",
    items: [
        {
            id: "dragons_eye",
            remove: "head",
            add: ""
        }
    ]
};

ServerEvents.tags("item", event =>
{
    trinketsandbaubles_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${trinketsandbaubles_curios.tag}:${item.remove}`, `${trinketsandbaubles_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${trinketsandbaubles_curios.tag}:${item.add}`, `${trinketsandbaubles_curios.namespace}:${item.id}`);
        }
    });
});
