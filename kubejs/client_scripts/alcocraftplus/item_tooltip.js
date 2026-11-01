ItemEvents.tooltip(event =>
{
    // 种子
    event.add("alcocraftplus:hop_seeds", Text.translatable("item.kubejs.tooltip.alcocraftplus.hop_seeds"));
    
    // 啤酒
    [
        "alcocraftplus:kvass",
        "alcocraftplus:chorus_ale",
        "alcocraftplus:digger_bitter",
        "alcocraftplus:drowned_ale",
        "alcocraftplus:ice_beer",
        "alcocraftplus:leprechaun_cider",
        "alcocraftplus:magnet_pilsner",
        "alcocraftplus:nether_porter",
        "alcocraftplus:nether_star_lager",
        "alcocraftplus:night_rauch",
        "alcocraftplus:sun_pale_ale",
        "alcocraftplus:wither_stout"
    ].forEach(beer =>
    {
        event.add(beer, Text.translatable("item.kubejs.tooltip.alcocraftplus.beer_text1").gold()); 
        event.add(beer, Text.translatable("item.kubejs.tooltip.alcocraftplus.beer_text2").gold()); 
    });
});
