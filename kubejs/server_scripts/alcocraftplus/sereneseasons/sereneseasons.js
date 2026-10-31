ServerEvents.tags("item", event =>
{
    [
        // seeds
        "alcocraftplus:hop_seeds",
        // result
        "alcocraftplus:hop"
    ].forEach(item =>
    {
        event.add("sereneseasons:autumn_crops", item);
        event.add("sereneseasons:summer_crops", item);
    });
});
