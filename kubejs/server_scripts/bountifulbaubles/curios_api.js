const bountifulbaubles_curios = {
    namespace: "bountifulbaubles",
    tag: "curios",
    items: [
        {
            id: "dark_egg",
            remove: "curio",
            add: ""
        },
        {
            id: "drop_spindle",
            remove: "curio",
            add: ""
        },
        {
            id: "fire_mind",
            remove: "curio",
            add: ""
        },
        {
            id: "warm_void",
            remove: "curio",
            add: ""
        },
        {
            id: "book_o_enchanting",
            remove: "curio",
            add: ""
        },
        {
            id: "ice_shard",
            remove: "curio",
            add: ""
        },
        {
            id: "dragon_breath",
            remove: "curio",
            add: ""
        },
        {
            id: "minds_eye",
            remove: "curio",
            add: ""
        },
        {
            id: "ruby_heart",
            remove: "curio",
            add: ""
        },
        {
            id: "golden_skull",
            remove: "curio",
            add: ""
        },
        {
            id: "starfish",
            remove: "curio",
            add: ""
        },
        {
            id: "blaze_heart",
            remove: "curio",
            add: ""
        },
        {
            id: "serpent_tooth",
            remove: "curio",
            add: ""
        },
        {
            id: "wither_nail",
            remove: "curio",
            add: ""
        },
        {
            id: "turtle_shell",
            remove: "curio",
            add: ""
        },
        {
            id: "mad_aura",
            remove: "curio",
            add: ""
        },
        {
            id: "mossy_belt",
            remove: "curio",
            add: ""
        },
        {
            id: "mossy_ring",
            remove: "curio",
            add: ""
        },
        {
            id: "glory_shards",
            remove: "curio",
            add: ""
        },
        {
            id: "butchers_cleaver",
            remove: "curio",
            add: ""
        }
    ]
};

ServerEvents.tags("item", event =>
{
    bountifulbaubles_curios.items.forEach(item =>
    {
        if (item.remove)
        {
            event.remove(`${bountifulbaubles_curios.tag}:${item.remove}`, `${bountifulbaubles_curios.namespace}:${item.id}`);
        }

        if (item.add)
        {
            event.add(`${bountifulbaubles_curios.tag}:${item.add}`, `${bountifulbaubles_curios.namespace}:${item.id}`);
        }
    });
});

