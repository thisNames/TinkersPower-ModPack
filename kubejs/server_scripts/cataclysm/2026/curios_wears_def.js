// priority: 2026

/**
 * cataclysm 饰品穿戴
 * @type {TDServerCuriosWear}
 */
const cataclysm_curios_wears = {
    namespace: "cataclysm",
    tag: "curios",
    items: [
        {
            id: "belt_of_monstrosity",
            remove: ["waist"],
            add: [],
            disable: true
        },
        {
            id: "belt_of_beginner",
            remove: ["waist"],
            add: ["belt"],
            disable: false
        },
        {
            id: "ring_of_grudged",
            remove: ["rings"],
            add: ["ring"],
            disable: false
        },
        {
            id: "unbreakable_skull",
            remove: [],
            add: ["charm"],
            disable: false
        }
    ]
};
