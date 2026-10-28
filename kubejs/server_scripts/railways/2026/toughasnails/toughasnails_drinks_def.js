// priority: 2026

/**
 * railways 饮品
 * @type {TDServerToughasnailsDrink}
 */
const railways_toughasnails_drinks = {
    namespace: "railways",
    drinks: [
        "sandy",
        "brown",
        "maroon",
        "red",
        "vermilion",
        "orange",
        "granite",
        "dripstone",
        "yellow",
        "chartreuse",
        "olive_green",
        "lime",
        "green",
        "pine_green",
        "ochrum",
        "cyan",
        "sea_green",
        "turquoise",
        "light_blue",
        "blue",
        "royal_blue",
        "purple",
        "magenta",
        "pink",
        "white",
        "diorite",
        "limestone",
        "light_gray",
        "tuff",
        "gray",
        "scorchia",
        "black",
    ].map(t =>
    {
        return {
            id: t + "_paint_pitcher",
            thirst: 8,
            hydration: 2,
            isDirty: true,
            dirtyChance: 3
        };
    })
};
