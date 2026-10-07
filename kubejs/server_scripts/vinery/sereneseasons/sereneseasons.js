ServerEvents.tags("item", event =>
{
    [
        // seeds
        "vinery:red_grape_seeds",
        "vinery:white_grape_seeds",
        "vinery:savanna_grape_seeds_red",
        "vinery:savanna_grape_seeds_white",
        "vinery:taiga_grape_seeds_red",
        "vinery:taiga_grape_seeds_white",
        "vinery:jungle_grape_seeds_red",
        "vinery:jungle_grape_seeds_white",
        // result
        "vinery:jungle_grapes_white",
        "vinery:jungle_grapes_red",
        "vinery:taiga_grapes_white",
        "vinery:taiga_grapes_red",
        "vinery:savanna_grapes_white",
        "vinery:savanna_grapes_red",
        "vinery:white_grape",
        "vinery:red_grape"
    ].forEach(item =>
    {
        event.add("sereneseasons:autumn_crops", item);
        event.add("sereneseasons:summer_crops", item);
    });
});
