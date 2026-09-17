const tinkers_ingenuity_curios = {
    namespace: "tinkers_ingenuity",
    tag: "curios",
    items: [
        {
            id: "tinkers_medal",
            remove: "tinkers_curio",
            add: "charm"
        }
    ]
};

ServerEvents.tags("item", event =>
{
    tinkers_ingenuity_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${tinkers_ingenuity_curios.tag}:${item.remove}`, `${tinkers_ingenuity_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${tinkers_ingenuity_curios.tag}:${item.add}`, `${tinkers_ingenuity_curios.namespace}:${item.id}`);
        }
    });
});
