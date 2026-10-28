// priority: 2026

/**
 * xat 饰品穿戴
 * @type {TDServerCuriosWear}
 */
const xat_curios_wears = {
    namespace: "xat",
    tag: "curios",
    items: [
        {
            id: "cosmetic",
            remove: ["charm"],
            add: ["curio"],
            disable: false
        },
        {
            id: "poison_stone",
            remove: ["charm"],
            add: ["curio"],
            disable: false
        },
        {
            id: "polarized_stone",
            remove: ["charm"],
            add: ["belt"],
            disable: false
        }
    ]
};
