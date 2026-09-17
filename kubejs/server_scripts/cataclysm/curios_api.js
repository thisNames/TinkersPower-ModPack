const cataclysm_curios = {
    namespace: "cataclysm",
    tag: "curios",
    items: [
        {
            id: "belt_of_monstrosity",
            remove: "waist",
            add: ""
        },
        {
            id: "belt_of_beginner",
            remove: "waist",
            add: "belt"
        },
        {
            id: "ring_of_grudged",
            remove: "rings",
            add: "ring"
        },
        {
            id: "unbreakable_skull",
            remove: "",
            add: "charm"
        }
    ]
};

ServerEvents.tags("item", event =>
{
    cataclysm_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${cataclysm_curios.tag}:${item.remove}`, `${cataclysm_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${cataclysm_curios.tag}:${item.add}`, `${cataclysm_curios.namespace}:${item.id}`);
        }
    });
});
