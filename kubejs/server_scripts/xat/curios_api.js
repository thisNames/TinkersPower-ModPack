const xat_curios = {
    namespace: "xat",
    tag: "curios",
    items: [
        {
            id: "cosmetic",
            remove: "charm",
            add: "curio"
        },
        {
            id: "poison_stone",
            remove: "charm",
            add: "curio"
        },
        {
            id: "polarized_stone",
            remove: "charm",
            add: "belt"
        }
    ]
};

ServerEvents.tags("item", event =>
{
    xat_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${xat_curios.tag}:${item.remove}`, `${xat_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${xat_curios.tag}:${item.add}`, `${xat_curios.namespace}:${item.id}`);
        }
    });
});
